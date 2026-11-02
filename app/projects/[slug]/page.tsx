import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudyHero } from '@/components/case-study/case-study-hero'
import {
  BuiltSection,
  ChallengesSection,
  FeaturesSection,
  LearningsSection,
  ProcessSection,
  StorySection,
  TechSection,
} from '@/components/case-study/case-study-body'
import { NextProject } from '@/components/case-study/next-project'
import { ScreenshotGallery } from '@/components/case-study/screenshot-gallery'
import { RecallStory, RecallFinal } from '@/components/case-study/recall-story'
import { SwiftTabStory, SwiftTabFinal } from '@/components/case-study/swift-tab-story'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} | ${project.subtitle}`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero project={project} />
        <StorySection project={project} />
        {project.slug === 'recall' ? <>
          <RecallStory project={project} />
          <ChallengesSection project={project} />
          <RecallFinal project={project} />
        </> : project.slug === 'swift-tab' ? <>
          <SwiftTabStory project={project} />
          <SwiftTabFinal project={project} />
        </> : <>
        {project.screenshots.length > 0 && <ScreenshotGallery project={project} />}
        {project.caseStudy.built.length > 0 && <BuiltSection project={project} />}
        {project.caseStudy.featureDetails.length > 0 && <FeaturesSection project={project} />}
        {project.tech.length > 0 && <TechSection project={project} />}
        {project.caseStudy.designProcess.length > 0 && <ProcessSection project={project} />}
        {project.caseStudy.challenges.length > 0 && <ChallengesSection project={project} />}
        {project.caseStudy.learnings.length > 0 && <LearningsSection project={project} />}
        </>}
        <NextProject project={project} next={next} />
      </main>
      <SiteFooter />
    </>
  )
}
