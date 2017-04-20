// Description:
//   A simple hubot that keeps track of karma.
//
// Commands:
//   hubot @[subject]++
//   hubot "[subject]"++
//
// Author:
//   HerrPfister

function sendKarmaMessage(robot, res, karmaAmount) {
    var subject = res.match[1] || res.match[2];

    var oldKarmaAmount = parseInt(robot.brain.get(subject)) || 0;
    var newKarmaAmount = oldKarmaAmount + karmaAmount;

    var karmaText = "not changed";

    robot.brain.set(subject, newKarmaAmount);

    if (oldKarmaAmount < newKarmaAmount) {
        karmaText = "increased to {amount}".replace("{amount}", newKarmaAmount.toString());
    } else if (oldKarmaAmount > newKarmaAmount) {
        karmaText = "decreased to {amount}".replace("{amount}", newKarmaAmount.toString());
    }

    res.send("{subject}\'s karma has {karmaText}."
        .replace("{subject}", subject)
        .replace("{karmaText}", karmaText));
}

module.exports = function (robot) {
    robot.respond(/test/i, function (res) {
        res.send('test');
    });
    robot.hear(/\s*"(.*)"[+]{2}[+]*|\s*(@\w+)\s?[+]{2}[+]*/i, function (res) {
        var plusCount = (res.message.text.match(/[+]/g) || []).length;
        var positiveKarmaAmount = plusCount > 2 ? plusCount : 1;

        sendKarmaMessage(robot, res, positiveKarmaAmount);
    });
    robot.hear(/\s*"(.*)"[-]{2}[-]*|\s*(@\w+)\s?[-]{2}[-]*/i, function (res) {
        var minusCount = (res.message.text.match(/[-]/g) || []).length;
        var negativeKarmaAmount = -(minusCount > 2 ? minusCount : 1);

        sendKarmaMessage(robot, res, negativeKarmaAmount);
    });
};