# hubot-karmabot

`hubot-karmabot` helps keep track of all that karma-tastic debt that people obtain.

### Usage

Simply add a `+` to add or `-` to deduct karma points from a subject. Like so:

```
hubot @SantaClaus++

output -> @SantaClaus's karma as increased to 2
```

or

```
hubot "Santa Claus"--

output -> Santa Claus's karma as decreased to 0
```

### Running hubot-karmabot Locally

You can test karmabot locally by running the following:

    % bin/hubot

You'll see some start up output and a prompt:

```
    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    hubot-karmabot>
```

Then you can interact with hubot-karmabo, like so:

```
    hubot-karmabot> hubot-karmabot @SantaClaus++
    @SantaClaus's karma as increased to 2
```
