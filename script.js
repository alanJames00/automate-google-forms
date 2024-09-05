const { encode } = require("urlencode");
const {
	Builder,
	Browser,
	By,
	Key,
	until,
	Button,
} = require("selenium-webdriver");
const submissions = require("./sample_submissions.json");

const constructUrl = (submission) => {
	// put the google form url here with entry params modified as in Readme
	return `https://docs.google.com/forms/d/e/1FAIpQLScMT62iy_DBsXvsH_PTkmk9MTujQoJU48lNdxRqtRugO_GGgg/viewform?entry.1038999142=${encode(submission.entry_1038999142)}&entry.1468277797_year=${encode(submission.entry_1468277797_year)}&entry.1468277797_month=${encode(submission.entry_1468277797_month)}&entry.1468277797_day=${encode(submission.entry_1468277797_day)}&entry.239572958=${encode(submission.entry_239572958)}&entry.738866442=${encode(
		submission.entry_738866442[0],
	)}& entry.738866442 = ${encode(submission.entry_738866442[1])}`;
};

async function submitForm(submission) {
	const driver = await new Builder().forBrowser(Browser.CHROME).build();

	try {
		const url = constructUrl(submission);

		// open the driver with the url
		await driver.get(url);

		// wait for the submission button and submit
		await driver.wait(
			until.elementLocated(By.css('div[role="button"][aria-label="Submit"]')),
			5000,
		);

		const submitBtn = await driver.findElement(
			By.xpath(
				'//div[@role="button" and @aria-label="Submit" and .//span[contains(text(), "Submit")]]',
			),
		);

		await submitBtn.click();

		// wait for some action to complete optionally
	} catch (err) {
		console.log(err);
	} finally {
		await driver.quit();
	}
}

async function main() {
	for (let submission of submissions) {
		await submitForm(submission);
	}
}

main();
