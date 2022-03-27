import optionsStorage from './options-storage.js';

async function init() {
	const { isEnabled } = await optionsStorage.getAll()
	if (!isEnabled) {
		return
	}
	const relativeTimeElements = window.document.querySelectorAll("relative-time")
	relativeTimeElements.forEach((timeElement) => {
		timeElement.innerHTML = `${timeElement.innerHTML} -- ${timeElement.title}`
	})
}

init()
