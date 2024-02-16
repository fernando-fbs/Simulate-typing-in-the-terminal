import * as fs from "fs";
import chalk from "chalk";

async function simulatesGeneralTextTyping(filePath: string) {
	const fileContent = await fs.promises.readFile(filePath, "utf-8");

	let i = 0;
	const interval = setInterval(() => {
		if (i >= fileContent.length) {
			clearInterval(interval);
			return;
		}

		const char = fileContent[i];
		const color = getChalkColor(char);

		process.stdout.write(color(char));
		i++;
	}, 20); // Tempo entre cada caractere (em milissegundos)
}

function getChalkColor(char: string): chalk.Chalk {
	if (/\w/.test(char) && char !== "_") {
		// Identifica letras, números e sublinhados (exceto "_") como parte de nomes
		return chalk.white;
	} else if (char === "(" || char === ")") {
		// Parênteses
		return chalk.magenta;
	} else if (char === "=") {
		// Atribuição
		return chalk.yellow;
	} else if (char === ";") {
		// Ponto e vírgula
		return chalk.gray;
	} else {
		return chalk.white;
	}
}



// Exemplo de uso
const filePath = "sql.sql";
simulatesGeneralTextTyping(filePath);
