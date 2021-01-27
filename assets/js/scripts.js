const recipes = {
    recipe_one: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "bolos de leite condensado",
        content_name: "bolo de leite condensado",
        link: "https://anamariabraga.globo.com/receita/bolo-de-leite-condensado/",
        can: 1
    },
    recipe_two: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "pratos de brigadeiro de panela",
        content_name: "brigadeiro de panela",
        link: "https://www.tudogostoso.com.br/receita/4276-brigadeiro-de-panela.html",
        can: 1
    },
    recipe_three: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "tapiocas de leite condensado",
        content_name: "tapioca de leite condensado",
        link: "https://www.tudogostoso.com.br/receita/144-tapioca-de-leite-condensado.html",
        can: 0.33
    },
    recipe_four: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "tijelas grandes de salada de frutas com leite condensado",
        content_name: "salada de frutas com leite condensado",
        link: "https://www.tudogostoso.com.br/receita/144-tapioca-de-leite-condensado.html",
        can: 1
    },
    recipe_five: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "pudins de leite condensado",
        content_name: "pudim de leite condensado",
        link: "https://www.tudogostoso.com.br/receita/3687-pudim-de-leite-condensado.html",
        can: 1
    },
    recipe_six: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "travessas de gelatina com leite condensado",
        content_name: "gelatina com leite condensado",
        link: "https://www.tudogostoso.com.br/receita/79387-creme-de-leite-condensado-com-gelatina.html",
        can: 1
    },
    recipe_seven: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "pavês de leite condensado",
        content_name: "pavê de leite condensado",
        link: "https://www.tudogostoso.com.br/receita/83692-pave-de-leite-condensado.html",
        can: 1
    },
    recipe_eight: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "mousses de limão com leite condensado",
        content_name: "mousse de limão com leite condensado",
        link: "https://www.tudogostoso.com.br/receita/155693-mousse-de-limao-rapido.html",
        can: 0.12
    },
    recipe_nine: {
        content_before: "Em um ano, você precisaria comer",
        content_after: "pães francês com leite condensado",
        content_name: "pão francês com leite condensado",
        link: "https://oglobo.globo.com/brasil/o-pao-bolsonaro-com-leite-condensado-ganha-adeptos-no-rio-23216196",
        can: 0.25
    },
};

const recipesKeys = Object.keys(recipes);
const randomRecipeKey = recipesKeys[Math.floor(Math.random() * recipesKeys.length)];
const valueSpent = 15600000;
const valueNeeded = Math.round(valueSpent / recipes[randomRecipeKey].can);
const content = document.getElementById('content-block');
const contentByYear = document.getElementById('content-by-year');
const contentRef = document.getElementById('content-ref');
const valueByDay = Math.round(365 / recipes[randomRecipeKey].can);

content.innerHTML = `${recipes[randomRecipeKey].content_before} <span>${extenso(valueNeeded)}</span> ${recipes[randomRecipeKey].content_after}.`;
contentByYear.innerHTML = `Isso significa que você teria que comer <span>${extenso(valueByDay)}</span> ${recipes[randomRecipeKey].content_after} por dia.`;
contentRef.innerHTML = `Adoce sua raiva com a receita: <a href="${recipes[randomRecipeKey].link}">Como fazer ${recipes[randomRecipeKey].content_name}.`;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}