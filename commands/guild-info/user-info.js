const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class UserInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'user-info',
			aliases: ['user', 'member', 'member-info'],
			group: 'guild-info',
			memberName: 'user-info',
			description: 'Responds with detailed information on a user.',
			guildOnly: true,
			clientPermissions: ['EMBED_LINKS'],
			args: [
				{
					key: 'member',
					prompt: 'Which user would you like to get information on?',
					type: 'member',
					default: ''
				}
			]
		});
	}

	run(msg, { member }) {
		if (!member) member = msg.member;
		const embed = new MessageEmbed()
			.setColor(member.displayHexColor)
			.setThumbnail(member.user.displayAvatarURL())
			.addField('❯ Name',
				member.user.tag, true)
			.addField('❯ ID',
				member.id, true)
			.addField('❯ Discord Join Date',
				member.user.createdAt.toDateString(), true)
			.addField('❯ Server Join Date',
				member.joinedAt.toDateString(), true)
			.addField('❯ Nickname',
				member.nickname || 'None', true)
			.addField('❯ Bot?',
				member.user.bot ? 'Yes' : 'No', true)
			.addField('❯ Highest Role',
				member.highestRole.name !== '@everyone' ? member.highestRole.name : 'None', true)
			.addField('❯ Hoist Role',
				member.hoistRole ? member.hoistRole.name : 'None', true);
		return msg.embed(embed);
	}
};