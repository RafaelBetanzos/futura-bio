import { Link } from "react-router-dom";
import x21 from "./2-1.png";
import x42 from "./4-2.png";
import geminiGeneratedImageUpxst3Upxst3Upxs1 from "./gemini-generated-image-upxst3upxst3upxs-1.png";
import group from "./group.png";
import { Icon } from "./Icon";
import IMG15531 from "./IMG-1553-1.png";
import icon2 from "./icon-2.svg";
import iconos1 from "./iconos-1.svg";
import image1 from "./image.png";
import image from "./image.svg";
import line1 from "./line-1.svg";
import line5 from "./line-5.svg";
import line7 from "./line-7.svg";
import vector from "./vector.svg";
import vector2 from "./vector-2.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector9 from "./vector-9.svg";

const topNavItems = [
  { label: "Producto", to: "/productos", width: "w-[73px]" },
  { label: "Sobre Nosotros", to: "#", width: "w-[123px]" },
  { label: "Artículos", to: "#", width: "w-[73px]" },
  { label: "Contacto", to: "#", width: "w-[75px]" },
];

const footerNavItems = [
  {
    label: "Productos",
    to: "/productos",
    left: "left-[562px]",
    width: "w-[81px]",
  },
  {
    label: "Sobre nosotros",
    to: "#",
    left: "left-[763px]",
    width: "w-[119px]",
  },
  { label: "Artículos", to: "#", left: "left-[1002px]", width: "w-[71px]" },
  { label: "Contacto", to: "#", left: "left-[1193px]", width: "w-[75px]" },
];

const ingredientsLeft = [
  {
    title: "TOCOPHEROL",
    titleClassName: "absolute top-[2955px] left-[230px]",
    descriptionClassName:
      "absolute top-[2999px] left-[185px] w-[197px] text-right",
    description: (
      <>
        Antioxidante -
        <br />
        Protege y fortalece la piel.
      </>
    ),
  },
  {
    title: "COCO NUCIFERA OIL",
    titleClassName: "absolute top-[3158px] left-[143px]",
    descriptionClassName:
      "absolute top-[3199px] left-[175px] w-[197px] text-right",
    description: <>Humectación profunda y suavidad prolongada.</>,
  },
  {
    title: "ARNICA MONTANA",
    titleClassName: "absolute top-[3358px] left-[165px]",
    descriptionClassName:
      "absolute top-[3401px] left-[185px] w-[187px] text-right",
    description: (
      <>
        Alivia y repara
        <br />
        pequeñas abrasiones.
      </>
    ),
  },
];

const ingredientsRight = [
  {
    title: "CENTELLA ASIATICA",
    titleClassName: "absolute top-[2955px] left-[1049px]",
    descriptionClassName: "absolute top-[2998px] left-[1049px] w-[239px]",
    description: (
      <>Favorece la regeneración y mejora la apariencia de la piel.</>
    ),
  },
  {
    title: "CALENDULA OFFICINALIS",
    titleClassName: "absolute top-[3158px] left-[1049px]",
    descriptionClassName: "absolute top-[3201px] left-[1049px] w-[239px]",
    description: (
      <>
        Calma y repara -
        <br />
        Ideal para pieles sensibles.
      </>
    ),
  },
  {
    title: "MANGIFERA INDICA",
    titleClassName: "absolute top-[3358px] left-[1049px]",
    descriptionClassName: "absolute top-[3401px] left-[1049px] w-[197px]",
    description: <>Nutrición intensa - Elasticidad y confort.</>,
  },
];

export const Productos = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[4031px] relative">
      <section aria-label="Hero del producto">
        <img
          className="absolute top-[70px] left-0 w-[1440px] h-[830px] aspect-[1.73]"
          alt="Producto Equilibrio diario para tu piel"
          src={x21}
        />
        <div className="absolute top-[361px] left-20 w-[768px] h-36">
          <h1 className="absolute top-0 left-0 w-[764px] h-36 flex items-center [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#5e5b38] text-5xl tracking-[0] leading-[normal]">
            <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#5e5b38] text-5xl tracking-[0]">
              E
            </span>
            <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#5e5b38] text-5xl tracking-[0]">
              quilibrio diario para tu piel
            </span>
          </h1>
          <p className="absolute top-[72px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#5e5b38] text-[38px] tracking-[0] leading-[normal]">
            Innovación, bienestar y naturaleza
          </p>
        </div>
        <Link
          aria-label="Realiza tu compra aquí"
          className="flex w-[324px] h-14 items-center gap-2 pl-[22px] pr-[33px] py-5 absolute top-[526px] left-20 bg-colecci-n-de-variables-marr-n1 rounded-lg shadow-button-shadow"
          to="/productos"
        >
          <span className="relative flex items-center justify-center w-[286px] mt-[-8.00px] mb-[-6.00px] mr-[-17.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-dark-green text-xl text-center tracking-[0] leading-[30px]">
            REALIZA TU COMPRA AQUÍ
          </span>
        </Link>
      </section>
      <section aria-label="Daily skincare">
        <img
          className="absolute top-[995px] left-0 w-[677px] h-[742px] aspect-[0.94] object-cover"
          alt="Textura de crema para cuidado diario"
          src={geminiGeneratedImageUpxst3Upxst3Upxs1}
        />
        <div className="absolute top-[1090px] left-[669px] w-[468px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#5e5b38] text-[44px] tracking-[0] leading-[normal]">
          DAILY SKINCARE
        </div>
        <h2 className="absolute top-[1156px] left-[672px] w-[665px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#5e5b38] text-[28px] tracking-[0] leading-[normal]">
          APTO TODO TIPO DE PIEL
        </h2>
        <img
          className="absolute top-[1187px] left-[656px] w-[104px] h-[104px] aspect-[1] object-cover"
          alt="Ícono de cuidado de la piel"
          src={iconos1}
        />
        <p className="absolute top-[1291px] left-[673px] w-[599px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#5e5b38] text-[23px] tracking-[-0.44px] leading-[34.5px]">
          <span className="tracking-[-0.10px]">
            Tu ritual diario de cuidado empieza aquí.
            <br />
            Equilibrio Natural es una crema corporal formulada para todo tipo de
            piel. Su textura cremosa y de rápida absorción brinda{" "}
          </span>
          <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold tracking-[-0.10px]">
            humectación prolongada
          </span>
          <span className="tracking-[-0.10px]">, dejando una</span>
          <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold tracking-[-0.10px]">
            {" "}
            sensación suave
          </span>
          <span className="tracking-[-0.10px]">
            . Desarrollada por FuturaBio®, combina el poder de ingredientes de
            origen natural con fórmulas pensadas y probadas, enfocadas en el{" "}
          </span>
          <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold tracking-[-0.10px]">
            cuidado integral y el equilibrio de la piel.
          </span>
        </p>
      </section>
      <section aria-labelledby="beneficios-heading">
        <div className="top-[1770px] h-[929px] bg-[#f5f4f480] absolute left-0 w-[1440px]" />
        <h2
          className="absolute top-[1973px] left-[calc(50.00%_-_574px)] w-[286px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#5e5b38] text-[44px] tracking-[0] leading-[normal]"
          id="beneficios-heading"
        >
          BENEFICIOS
        </h2>
        <p className="absolute top-[2072px] left-[146px] w-[527px] h-[432px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#5e5b38] text-[23px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#5e5b38] text-[23px] tracking-[0]">
            Una piel que se siente bien, se ve mejor. Equilibrio Natural Crema
            aporta{" "}
          </span>
          <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold">
            humectación intensa y de larga duración
          </span>
          <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#5e5b38] text-[23px] tracking-[0]">
            , mejorando visiblemente la textura, la luminosidad y la uniformidad
            de la piel desde las primeras aplicaciones. Ayuda a combatir la
            resequedad, brinda suavidad inmediata y
          </span>
          <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold">
            {" "}
            acompaña los procesos naturales de regeneración cutánea
          </span>
          <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#5e5b38] text-[23px] tracking-[0]">
            . Su acción reparadora contribuye a aliviar pequeñas abrasiones y a
            mantener la piel saludable, equilibrada y confortable a lo largo del
            tiempo.
          </span>
        </p>
        <img
          className="absolute top-[1979px] left-[690px] w-[678px] h-[608px] aspect-[1.12] object-cover"
          alt="Envase del producto Equilibrio Natural"
          src={IMG15531}
        />
      </section>
      <section aria-labelledby="ingredientes-heading">
        <img
          className="absolute top-[2699px] left-0 w-[1440px] h-[998px] aspect-[1.44]"
          alt="Sección de ingredientes"
          src={x42}
        />
        <h2
          className="absolute top-[2763px] left-[calc(50.00%_-_573px)] w-[328px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#5e5b38] text-[44px] tracking-[0] leading-[normal]"
          id="ingredientes-heading"
        >
          INGREDIENTES
        </h2>
        {ingredientsLeft.map((item) => (
          <div key={item.title}>
            <h3
              className={`${item.titleClassName} [font-family:'Poppins-Medium',Helvetica] font-medium text-[#5e5b38] text-[23px] tracking-[0] leading-[normal]`}
            >
              {item.title}
            </h3>
            <p
              className={`${item.descriptionClassName} [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a8a697] text-[15px] tracking-[0] leading-[normal]`}
            >
              {item.description}
            </p>
          </div>
        ))}

        {ingredientsRight.map((item) => (
          <div key={item.title}>
            <h3
              className={`${item.titleClassName} [font-family:'Poppins-Medium',Helvetica] font-medium text-[#5e5b38] text-[23px] tracking-[0] leading-[normal]`}
            >
              {item.title}
            </h3>
            <p
              className={`${item.descriptionClassName} [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a8a697] text-[15px] tracking-[0] leading-[normal]`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </section>
      <header className="absolute -top-0.5 left-0 w-[1440px] h-[74px]">
        <div className="top-0.5 h-[72px] bg-white absolute left-0 w-[1440px]" />
        <nav
          aria-label="Navegación principal"
          className="absolute top-[29px] left-[688px] w-[673px] h-[27px] flex gap-[55px]"
        >
          {topNavItems.map((item, index) =>
            item.to === "/productos" ? (
              <Link
                key={`${item.label}-${index}`}
                className={`mt-[3px] ${item.width} h-6 flex`}
                to={item.to}
              >
                <div
                  className={`flex items-center justify-center flex-1 ${item.width} [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6`}
                >
                  {item.label}
                </div>
              </Link>
            ) : (
              <a
                key={`${item.label}-${index}`}
                className={`mt-[3px] ${item.width} h-6 flex`}
                href={item.to}
              >
                <div
                  className={`flex items-center justify-center flex-1 ${item.width} [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6`}
                >
                  {item.label}
                </div>
              </a>
            ),
          )}

          <button
            aria-label="Comprar"
            className="all-[unset] box-border flex w-[109px] h-[27px] relative items-center justify-around p-3.5 bg-[#474329] rounded shadow-button-shadow cursor-pointer"
            type="button"
          >
            <div className="relative w-[98.14px] h-[27px] mt-[-14.00px] mb-[-14.00px] ml-[-8.57px] mr-[-8.57px]">
              <div className="absolute top-0.5 left-0 w-[76px] h-6 flex">
                <div className="flex items-center w-[74px] h-6 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                  Comprar
                </div>
              </div>
              <div className="absolute top-0 left-[73px] w-[25px] h-[27px] bg-[url(/carrito2-2.png)] bg-cover bg-[50%_50%]" />
            </div>
          </button>
        </nav>
        <div className="absolute top-0 left-14 w-[239px] h-[74px]">
          <div className="absolute w-[177px] h-[30px] top-5 left-6">
            <img
              className="absolute w-full h-[91.10%] top-[8.90%] left-0"
              alt="Futurabio"
              src={group}
            />
            <div className="absolute w-[30.68%] h-full top-0 left-[69.32%]">
              <img
                className="absolute w-full h-[98.39%] top-0 left-0"
                alt=""
                aria-hidden="true"
                src={vector}
              />
              <img
                className="absolute w-[54.73%] h-full top-0 left-[45.27%]"
                alt=""
                aria-hidden="true"
                src={image}
              />
              <img
                className="absolute w-[41.06%] h-[74.01%] top-[25.99%] left-[58.94%]"
                alt=""
                aria-hidden="true"
                src={vector2}
              />
            </div>
          </div>
          <div className="absolute w-[3.53%] h-[11.31%] top-[27.27%] left-[85.81%] flex bg-[url(/vector-3.svg)] bg-[100%_100%]">
            <img
              className="flex-1 w-[4.06px]"
              alt=""
              aria-hidden="true"
              src={vector4}
            />
          </div>
        </div>
      </header>
      <footer className="absolute top-[3700px] left-0 w-[1448px] h-[331px]">
        <div className="top-0 h-[331px] bg-white absolute left-0 w-[1440px]" />
        <nav aria-label="Navegación del pie de página">
          {footerNavItems.map((item, index) =>
            item.to === "/productos" ? (
              <Link
                key={`${item.label}-${index}`}
                className={`absolute top-[107px] ${item.left} ${item.width} [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[13px] text-center tracking-[0] leading-[19.5px] block`}
                to={item.to}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={`${item.label}-${index}`}
                className={`absolute top-[107px] ${item.left} ${item.width} [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[13px] text-center tracking-[0] leading-[19.5px] block`}
                href={item.to}
              >
                {item.label}
              </a>
            ),
          )}

          <div className="absolute top-[97px] left-[703px] w-[430px] h-[43px] flex">
            <img
              className="w-px h-[43px]"
              alt=""
              aria-hidden="true"
              src={line1}
            />
            <img
              className="ml-[238px] w-px h-[43px]"
              alt=""
              aria-hidden="true"
              src={line5}
            />
            <img
              className="ml-[190px] w-px h-[43px]"
              alt=""
              aria-hidden="true"
              src={line7}
            />
          </div>
        </nav>
        <div className="absolute top-[149px] left-[125px] w-[58px] h-[58px] flex rounded">
          <div className="mt-1.5 w-6 h-6 ml-[-7px] flex">
            <Icon className="!mt-[3px] !w-[18px] !h-[18px] !ml-[3px]" />
          </div>
          <a
            aria-label="Instagram de Futurabio"
            className="mt-0.5 w-[29px] h-[30px] flex rounded"
            href="https://www.instagram.com/futurabioactives/#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="mt-2 w-[35px] h-[35px] ml-2 flex">
              <img className="flex-1 w-[18px]" alt="Instagram" src={icon2} />
            </div>
          </a>
        </div>
        <div className="absolute top-[84px] left-[99px] w-[228px] h-[71px] translate-y-[3700px]">
          <div className="absolute w-[169px] h-[29px] top-[19px] left-[22px]">
            <img
              className="absolute w-full h-[91.10%] top-[8.90%] left-0"
              alt="Futurabio"
              src={image1}
            />
            <div className="absolute w-[30.68%] h-full top-0 left-[69.32%]">
              <img
                className="absolute w-full h-[98.39%] top-0 left-0"
                alt=""
                aria-hidden="true"
                src={vector5}
              />
              <img
                className="absolute w-[54.73%] h-full top-0 left-[45.27%]"
                alt=""
                aria-hidden="true"
                src={vector6}
              />
              <img
                className="absolute w-[41.06%] h-[74.01%] top-[25.99%] left-[58.94%]"
                alt=""
                aria-hidden="true"
                src={vector7}
              />
            </div>
          </div>
          <div className="absolute w-[3.53%] h-[11.31%] top-[27.27%] left-[85.55%] flex bg-[url(/vector-8.svg)] bg-[100%_100%]">
            <img
              className="flex-1 w-[3.87px]"
              alt=""
              aria-hidden="true"
              src={vector9}
            />
          </div>
        </div>
      </footer>
    </main>
  );
};
