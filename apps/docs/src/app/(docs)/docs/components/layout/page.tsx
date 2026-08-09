import React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { Playground } from '@/components/docs/core/Playground';
import { Container, Grid, Col, Stack, Row, LayoutDivider } from '@siberui/react';

const headings = [
  { id: 'grid', text: 'Grid', level: 2 },
  { id: 'stack-and-row', text: 'Stack & Row', level: 2 },
  { id: 'container-and-divider', text: 'Container & Divider', level: 2 },
];

export default function LayoutDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Layout System"
        description="A powerful set of layout primitives (Container, Grid, Col, Stack, Row) for rapid, responsive UI composition."
      />

      <ContentSection title="Grid" id="grid">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">12-Column Grid</h3>
            <p className="text-slate-400 mb-6">
              The <code className="text-cyan-400">Grid</code> and <code className="text-cyan-400">Col</code> components provide a responsive 12-column CSS grid system.
            </p>
            <Playground code={`<Grid cols={12} gap="md">
  <Col span={4} className="bg-slate-800 p-4 rounded text-center">Col 4</Col>
  <Col span={8} className="bg-slate-800 p-4 rounded text-center">Col 8</Col>
  <Col span={6} className="bg-slate-800 p-4 rounded text-center">Col 6</Col>
  <Col span={6} className="bg-slate-800 p-4 rounded text-center">Col 6</Col>
</Grid>`}>
              <div className="w-full p-8 font-mono text-xs text-white">
                <Grid cols={12} gap="md">
                  <Col span={4} className="bg-slate-800/80 border border-border-hairline p-4 rounded text-center">Col 4</Col>
                  <Col span={8} className="bg-slate-800/80 border border-border-hairline p-4 rounded text-center">Col 8</Col>
                  <Col span={6} className="bg-slate-800/80 border border-border-hairline p-4 rounded text-center">Col 6</Col>
                  <Col span={6} className="bg-slate-800/80 border border-border-hairline p-4 rounded text-center">Col 6</Col>
                </Grid>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Stack & Row" id="stack-and-row">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Flexbox Composition</h3>
            <p className="text-slate-400 mb-6">
              Use <code className="text-cyan-400">Stack</code> for vertical rhythm and <code className="text-cyan-400">Row</code> for horizontal alignments.
            </p>
            <Playground code={`<Stack gap="lg">
  <div className="bg-slate-800 p-4 rounded">Vertical Item 1</div>
  <Row gap="md" justify="between">
    <div className="bg-slate-800 p-4 rounded">Horizontal Left</div>
    <div className="bg-slate-800 p-4 rounded">Horizontal Right</div>
  </Row>
</Stack>`}>
              <div className="w-full p-8 font-mono text-xs text-white">
                <Stack gap="lg">
                  <div className="bg-slate-800/80 border border-border-hairline p-4 rounded">Vertical Item 1</div>
                  <Row gap="md" justify="between">
                    <div className="bg-slate-800/80 border border-border-hairline p-4 rounded">Horizontal Left</div>
                    <div className="bg-slate-800/80 border border-border-hairline p-4 rounded">Horizontal Right</div>
                  </Row>
                </Stack>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Container & Divider" id="container-and-divider">
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-200">Structural Primitives</h3>
            <Playground code={`<Container size="sm" className="border border-border-hairline p-6 rounded-lg bg-slate-900">
  <div className="text-center text-slate-300">Constrained Container Content</div>
  <LayoutDivider className="my-6" />
  <div className="text-center text-slate-400">Section below divider</div>
</Container>`}>
              <div className="w-full p-8">
                <Container size="sm" className="border border-border-hairline p-6 rounded-lg bg-slate-900">
                  <div className="text-center text-slate-300 text-sm">Constrained Container Content</div>
                  <LayoutDivider className="my-6" />
                  <div className="text-center text-slate-400 text-sm">Section below divider</div>
                </Container>
              </div>
            </Playground>
          </div>
        </div>
      </ContentSection>

    </ComponentPage>
  );
}
