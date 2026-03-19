import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { flowProductsBySlug } from "@/lib/flow-products";

type PrivacyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = flowProductsBySlug[slug];

  if (!product) {
    return {
      title: "Politica de privacidade | Sphynix",
    };
  }

  return {
    title: `Politica de Privacidade | ${product.name} | Sphynix`,
    description: `Politica de Privacidade oficial do ${product.name}.`,
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { slug } = await params;
  const product = flowProductsBySlug[slug];

  if (!product) {
    notFound();
  }

  return (
    <LegalDocumentPage
      eyebrow="Documento legal"
      title={`Politica de Privacidade do ${product.name}`}
      summary="Este documento descreve quais dados o BarberFlow utiliza, por que esses dados existem dentro da plataforma e como o usuario pode exercer controle sobre a propria conta."
      effectiveDate="19 de marco de 2026"
      backHref={`/flow/${product.slug}`}
      backLabel={product.name}
      sections={[
        {
          heading: "1. Dados coletados",
          paragraphs: [
            "O BarberFlow coleta os dados necessarios para operar a conta e a barbearia dentro da plataforma, incluindo nome, e-mail, telefone, dados da barbearia, agenda, clientes, equipe, configuracoes de uso e informacoes relacionadas a assinatura.",
            "Tambem podem ser tratados dados tecnicos de autenticacao, identificadores de compra, status da assinatura, historico de acesso e registros operacionais associados ao funcionamento do servico.",
          ],
        },
        {
          heading: "2. Como os dados sao usados",
          paragraphs: [
            "Esses dados sao usados para autenticar usuarios, organizar a agenda, operar o booking publico, administrar equipe, controlar permissoes, validar assinatura, oferecer suporte e manter a seguranca da conta.",
            "O BarberFlow tambem utiliza esses dados para prevenir abuso, manter a integridade da operacao da barbearia e sustentar recursos premium em diferentes dispositivos da mesma conta.",
          ],
        },
        {
          heading: "3. Compartilhamento e provedores",
          paragraphs: [
            "O BarberFlow pode usar provedores terceirizados para infraestrutura, autenticacao, analytics, notificacoes, armazenamento e processamento de pagamentos, sempre dentro do necessario para a entrega do servico.",
            "Os dados nao sao vendidos. O compartilhamento ocorre apenas quando exigido para funcionamento da plataforma, obrigacao legal, seguranca, suporte ou processamento da assinatura.",
          ],
        },
        {
          heading: "4. Exclusao e retencao",
          paragraphs: [
            "Os dados sao mantidos pelo tempo necessario para operar a conta, cumprir obrigacoes tecnicas e legais e preservar consistencia operacional da barbearia.",
            "O usuario pode solicitar a exclusao da propria conta dentro do aplicativo. Quando isso acontece, o BarberFlow remove os dados vinculados conforme as regras tecnicas e legais aplicaveis.",
          ],
        },
        {
          heading: "5. Contato",
          paragraphs: [
            "Para duvidas sobre privacidade, exclusao de dados ou uso da plataforma, entre em contato pelo e-mail israelbryantgt@gmail.com.",
          ],
        },
      ]}
    />
  );
}
