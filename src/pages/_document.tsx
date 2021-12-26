import Document, { Html, Head, Main, NextScript } from "next/document";

// Este é o único componente que o o Next pede q seja uma class
// Esse arquivo é carregado apenas uma úncia vez
// Aqui que fica toda a estrutura da página em Html, diferentemente do react
// que ficava ficava em uma div com id root
export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    {/**Deixamos o Head vazio para que ele fique dinãmico, se colocar aqui ficará estático
                     * colocamos o o title do Head dentro de cada página, assim cada página, terá seu próprio 
                     * Head, para usar ele em cada página basta importar o Head e usar ele na page, há um exemplo
                     * no index
                     */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}