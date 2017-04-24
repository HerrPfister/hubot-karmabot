# hubot-karmabot

`hubot-karmabot` helps keep track of all that karma-tastic debt that people obtain.

### Running Locally

Just run the following command in the root dir of karmabot:

```
bin/hubot
```

The `hubot cli` should start up for you to start testing out commands.

### Usage

##### Increase/Decreasing Karma

Simply add a `+` to add or `-` to deduct karma points from a subject. Like so:

```
@SantaClaus++

output -> @SantaClaus's karma as increased to 1
```

```
@SantaClaus--

output -> @SantaClaus's karma as decreased to 0
```

##### Viewing Karma Standings

Simply type:

```
karmabot karma list

output -> @SantasClaus = 0
          @EasterBunny = 1
```
