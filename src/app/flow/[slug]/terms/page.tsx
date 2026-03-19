import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { flowProductsBySlug } from "@/lib/flow-products";

type TermsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = flowProductsBySlug[slug];

  if (!product) {
    return {
      title: "Termos de uso | Sphynix",
    };
  }

  return {
    title: `Termos de Uso | ${product.name} | Sphynix`,
    description: `Termos de Uso oficiais do ${product.name}.`,
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { slug } = await params;
  const product = flowProductsBySlug[slug];

  if (!product) {
    notFound();
  }

  return (
    <LegalDocumentPage
      eyebrow="Documento legal"
      title={`Termos de Uso do ${product.name}`}
      summary="Estes termos definem as condicoes de uso do BarberFlow, incluindo responsabilidades do usuario, uso da assinatura, funcionamento geral da plataforma e limites operacionais do servico."
      effectiveDate="19 de marco de 2026"
      backHref={`/flow/${product.slug}`}
      backLabel={product.name}
      sections={[
        {
          heading: "1. Objeto do servico",
          paragraphs: [
            "O BarberFlow e uma plataforma de gestao para barbearias, com recursos de agenda, equipe, clientes, booking publico, assinatura e leitura operacional.",
            "Ao criar uma conta e usar a plataforma, o usuario concorda em utilizar o servico de forma licita, responsavel e compatível com a finalidade do produto.",
          ],
        },
        {
          heading: "2. Conta e responsabilidade",
          paragraphs: [
            "O usuario e responsavel pelas informacoes cadastradas na conta, pela seguranca de acesso e pelo uso dos dados de clientes e colaboradores dentro da propria operacao.",
            "Tambem e responsabilidade do usuario garantir que as informacoes inseridas no sistema sejam verdadeiras e adequadas ao uso da plataforma.",
          ],
        },
        {
          heading: "3. Assinaturas e cobranca",
          paragraphs: [
            "Alguns recursos dependem de assinatura ativa. Planos pagos podem ser renovados automaticamente conforme as regras da plataforma de cobranca aplicavel, como App Store, Google Play ou checkout externo autorizado.",
            "O cancelamento, quando disponivel, deve ser feito pelo mesmo canal da assinatura. O acesso premium pode permanecer ativo ate o fim do ciclo ja pago, conforme a politica da plataforma de cobranca.",
          ],
        },
        {
          heading: "4. Uso indevido e suspensao",
          paragraphs: [
            "O BarberFlow pode suspender ou encerrar contas em caso de fraude, abuso, tentativa de violar a seguranca da plataforma, uso indevido dos recursos ou descumprimento destes termos.",
            "Tambem podemos aplicar limitacoes operacionais temporarias quando isso for necessario para seguranca, manutencao, estabilidade ou adequacao legal do servico.",
          ],
        },
        {
          heading: "5. Atualizacoes e contato",
          paragraphs: [
            "O servico pode receber atualizacoes, melhorias e ajustes de funcionamento sem aviso previo, desde que isso nao descaracterize sua finalidade principal.",
            "Ao continuar usando o BarberFlow, o usuario declara estar de acordo com estes Termos de Uso. Contato: israelbryantgt@gmail.com.",
          ],
        },
      ]}
    />
  );
}
