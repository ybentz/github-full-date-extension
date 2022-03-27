import OptionsSync from 'webext-options-sync';

export default new OptionsSync({
	defaults: {
		isEnabled: true,
	},
	migrations: [
		OptionsSync.migrations.removeUnused,
	],
	logging: true,
});
