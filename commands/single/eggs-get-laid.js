const Command = require('../../structures/Command');
const path = require('path');

module.exports = class EggsGetLaidCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'eggs-get-laid',
			aliases: ['eggs-gets-laid'],
			group: 'single',
			memberName: 'eggs-get-laid',
			description: 'Sends the ultimate roast.',
			clientPermissions: ['ATTACH_FILES']
		});
	}

	run(msg) {
		return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', 'eggs-get-laid.png')] });
	}
};
