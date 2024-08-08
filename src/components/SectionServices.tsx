import Image from "next/image";
import { Container } from "@/components/Container";

import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

import ImagePhone from "@/assets/phone.png";

export function SectionServices() {
  return (
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            Serviços Exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie Suas Finanças sem Sair de Casa
          </h2>
          <p className="text-lg max-w-[584px] mb-16 text-second-gray">
            Veja Como Você Pode Cuidar das Suas Finanças Pelo App Itaú de Forma
            Segura, Rápida e o Melhor, no Conforto da sua Casa
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 items-center justify-center">
                <Image src={PhoneIcon} alt="Icon Phone" />
                <p className="flex-1 text-txt-gray pr-2">
                  Acompanhar sua Conta , Fazer Transferências e Pagamentos de
                  Onde Estiver
                </p>
              </div>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 items-center justify-center">
                <Image src={SolutionsIcon} alt="Icon Phone" />
                <p className="flex-1 text-txt-gray pr-2">
                  Soluções de Empréstimos e Renegociação Para Organizar Suas
                  Finanças
                </p>
              </div>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 items-center justify-center">
                <Image src={OptionsIcon} alt="Icon Phone" />
                <p className="flex-1 text-txt-gray pr-2">
                  Diversas Opções de Investimentos, de Acordo com o seu Perfil
                  de Investidor
                </p>
              </div>
            </li>
            <li className="flex items-center gap-9">
              <div className="w-7 h-7 items-center justify-center">
                <Image src={CardIcon} alt="Icon Phone" />
                <p className="flex-1 text-txt-gray pr-2">
                  Acompanhe a Fatura do seu Cartão de Crédito e Faça Compras
                  Online com seu Cartão Virtual
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
      <div className="absolute flex items-center top-0 right-0 h-full w-[32%] bg-gray-phone">
        <Image src={ImagePhone} alt="Phone" className="translate-x-[-50%]" />
      </div>
    </section>
  );
}
