window.onload = () => {
    const inputText = document.querySelector('#texto-entrada');
    const resultText = document.querySelector('#resultados');

    const filteredWords = (str, regex, spacing) => {
        const arr = str
            .replace(regex, '')
            .toLowerCase()
            .split(spacing)
            .sort();
        return arr;
    }
    // console.log(words(inputText.textContent, /[^A-Za-z]\s*/g, ''))
    // console.log

    const countString = (strings) => {
        let counts = {};

        strings.forEach((string) => {
            counts[string] = (counts[string] || 0) +1;
        });

        return counts;
    }
    
    
    const showResults = (results, node) =>{
        for (const result in results) {
            node.insertAdjacentHTML(
                'beforeend',
                `<p>
                    <strong> Palabra ${result} </strong>
                    <span> Cantidad: ${results[result]}</span
                <p>`
            )
        }

    }
    const words = filteredWords(inputText.textContent, /[^A-Za-z]\s/g, ' ') 
    showResults(countString(words), resultText)
}  