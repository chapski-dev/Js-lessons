// * Обработка ошибок
// Обработки ошибок должны информировать пользователей о том что происходит, 
// для этого применяются разные способы обработки js-ошибок по мере их возникновения
// Ошибки могут возникать из-за наших промахов, неожиданного ввода пользователя,
// непроавильного ответа сервера и по тысячи других причин 

// try...catch
// для обработки исключений в JS была представлена конструкция try...catch

try {
    // код который может привести к ошибке
} catch (error) {
    // действия при возникновении ошибки
};

// если в разделе try происходит ошибка, выполнение кода немедленно прекращается и возобнавляется с раздела catch, в который передается обьект со сведениями об ошибке

// необязательное предложение finally инструкции try...catch выполняется после неё в любом случае независимо от того возникла ли ошибка
// ничто в разделе try или catch, даже инструкция return не может предотвратить выполнение кода в finally.


function testFinally () {
    try {
        return 2;
    } catch (error) {
        return 1;
    }  finally {
        return 0;
    };
};

// Задача 1

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = () => {
    try {
        const pokemonList = await fetch(baseUrl)
            .then(response => response.json())
            .then(item => item.results);
        console.log(pokemonList);
        const resultPokemons = pokemonList.map(pokemon => ({
            pokemon.name = pokemon.
        }))
    } catch (error) {
        
    };
};