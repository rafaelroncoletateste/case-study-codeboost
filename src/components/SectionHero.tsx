import Image from "next/image";
import { Container } from "@/components/Container";

import ImgAppStore from "@/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/assets/btn-google-play.svg";
import Arrow from "@/assets/arrow-explorer.svg";

export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img-bg-hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white text-6xl font-bold mb-4">
            Tenha seu Banco na Palma da sua mão
          </h1>
          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as Operações que Você Precisa em um só Lugar. Simples,
            Completo e Feito Para Você
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImgAppStore} alt="Apple Store" />
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="Google Play" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="Arrow down" />
            <span className="text-white text-sm font-bold">Continuar Explorando</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
