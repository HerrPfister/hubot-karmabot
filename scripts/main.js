// Description:
//   A simple hubot that keeps track of karma.
//
// Commands:
//   hubot @[subject]++
//   hubot "[subject]"++
//
// Author:
//   HerrPfister

module.exports = function (robot) {
    robot.hear(/s*"(.*)"[+-]+|\s*(@\w+)\s?[+-]+/i, function (res) {
        var subject = res.match[1] || res.match[2];
        var positiveKarmaAmount = (res.message.text.match(/[+]/g) || []).length;
        var negativeKarmaAmount = (res.message.text.match(/[-]/g) || []).length;
        var oldKarmaAmount = parseInt(res.brain.get(subject));
        var newKarmaAmount = oldKarmaAmount + positiveKarmaAmount - negativeKarmaAmount;
        var karmaText = "not changed";

        res.brain.set(subject, newKarmaAmount);

        if (oldKarmaAmount < newKarmaAmount) {
            karmaText = "increased to {amount}".replace("{amount}", newKarmaAmount.toString());
        } else if (oldKarmaAmount > newKarmaAmount) {
            karmaText = "decreased to {amount}".replace("{amount}", newKarmaAmount.toString());
        }

        res.send("{subject}\'s karma has {karmaText}.")
            .replace("{subject}", subject)
            .replace("{karmaText}", karmaText);
    });
};