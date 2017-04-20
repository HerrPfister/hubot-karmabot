// Description:
//   A simple hubot that keeps track of karma.
//
// Commands:
//   hubot @[user]++
//   hubot "[subject]"++
//
// Author:
//   HerrPfister

module.exports = function (robot) {
    robot.hear(/s*"(.*)"[+-]+|\s*(@\w+)\s?[+-]+/i, function (res) {
        var subject = res.match[1] || res.match[2];
        var positiveKarmaAmount = (res.message.text.match(/[+]/g) || []).length;
        var negativeKarmaAmount = (res.message.text.match(/[-]/g) || []).length;
        var newKarmaAmount = parseInt(res.brain.get(subject)) + positiveKarmaAmount - negativeKarmaAmount;

        res.brain.set(subject, newKarmaAmount);

        res.send("{subject}\'s karma has changed to {karmaAmount}"
            .replace("{subject}", subject)
            .replace("{karmaAmount}", newKarmaAmount.toString()));
    });
};