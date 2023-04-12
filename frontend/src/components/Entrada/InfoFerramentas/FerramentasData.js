// ferramenta = {desc + href + img}
const descTools = [
    "O tradicional lápis e papel é ótimo quando se está longe do computador. Esse é o método que me imergiu no desenho, tal como para muitas pessoas. Quando quero fazer desenhos detalhados no virtual, utilizo esse método para esboços e faço os toques finais no MediBang",
    "Para esboços mais simples, ou com alguns estilos específicos (como pixel art), o Microsoft Paint é muito bom para alcançar esses efeitos. Qualquer máquina Windows de versão anterior ao 10 tem esse programa, e não é difícil de usar.",
    "Essa é uma plataforma que utilizo para desenhos com uma mecânica muito parecida com a do Photoshop. Faço desenhos com efeitos e diversos filtros utilizando o MediBang porque além de ser gratuito, é muito rico em ferramentas e possui suporte para armazenamento em nuvem.",
    "O Blender é uma plataforma gratuita de modelagem 3D que comecei a explorar durante minha faculdade. Às vezes, utilizo referências nele para ilustrar melhor as posições que quero, e também o utilizo para criar modelos 3D; mesmo que eu seja iniciante em modelagem 3D ainda."]
const hrefTools = [
    "https://blog.grafittiartes.com.br/desenho-analogico-ou-digital/",
    "https://support.microsoft.com/pt-br/windows/ajuda-do-paint-d62e155a-1775-6da4-0862-62a3e9e5a511",
    "https://medibangpaint.com/pt/pc/about/",
    "https://www.blender.org/about/"]
const imgTools = [
    "https://icons.iconarchive.com/icons/designcontest/ecommerce-business/256/edit-icon.png",
    "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/856490a8eb25974567e67d4036c3c044.png",
    "https://consumerchoice-public.s3.amazonaws.com/services/icons/prod/60c7017e0bd05d001c9b685f_33_51d3Zp8slwLmedipaint-removebg-preview.png",
    "https://devtalk.blender.org/uploads/default/optimized/2X/4/490c5bf9686b023a6104676fef2322589487601d_2_500x500.png"]

export const arrayFerr = [{
    id : 1,
    srcName : "Desenho Analógico",
    srcDesc : descTools[0],
    srcHref : hrefTools[0],
    srcImg : imgTools[0],
    srcImgAlt: "imagem de desenho com papel e caneta"}
    ,
    {id : 2,
    srcName : "MS Paint",
    srcDesc : descTools[1],
    srcHref : hrefTools[1],
    srcImg : imgTools[1],
    srcImgAlt: "imagem da logo do Microsoft Paint"}
    ,
    {id : 3,
    srcName : "MediBang Paint",
    srcDesc : descTools[2],
    srcHref : hrefTools[2],
    srcImg : imgTools[2],
    srcImgAlt: "imagem da logo do MediBang"}
    ,
    {id : 4,
    srcName : "Blender",
    srcDesc : descTools[3],
    srcHref : hrefTools[3],
    srcImg : imgTools[3],
    srcImgAlt: "imagem da logo do Blender 3D"}
]