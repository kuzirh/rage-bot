# RAGE-bot

## Project Overview

Have you ever been so angry while playing PC games with your friends? Are you part of a discord server that is missing a channel for you to go an vent your
frustrations from missing that PENTAKILL or ACE? Hi, My name is Kuzirh, I am software engineer by trade and an avid angry gamer. RAGE-bot is a custom discord bot solution that you can add to your discord server that will help you release all that pent-up anger. RAGE-bot started as an ask from one of my friends who want to have a channel where you can ONLY type in all caps. The idea for this bot has grown over time (we'll get to that in future features), and I want to be share how I went about creating and deploying this custom bot.

### Original Features:

- A Python script that polled messages on a specific channel in a discord server
  - The message would then be parsed to make sure that the contents of the message were all caps. If it wasn't, then the message would be deleted and a custom bot messagea appears to remind users that this channel is for RAGE.

SO this is literally the only thing that RAGE-bot did, and he was damn good at it. I have grown the idea with the help of my fiancee (she is a data scientist, wow!)

### Planned Future Features:

- A script that polls messages on a specific channel in a discord server
  - The message would then be parsed to make sure that the contents of the message were all caps. If it wasn't, then the message would be deleted and a custom bot messagea appears to remind users that this channel is for RAGE.
- Would like to store the messages that were deleted either in a database (DynamoDB) or in S3 as a CSV file
- Would like to convert the architecture from being a script running on an EC2 instance to completely serveless
- Would like to convert the project from python to TypeScript/Nodejs
- Would like to add some sort of sentiment analysis to the deleted messages to see how vile the messages can be. This can be used down the line to give users custom roles based on message sentiment score.

## To The Future:

I have a lot of plans for RAGE-bot, if you think of anything you'd like to add to the bot or want to use the code for your own channel please feel free.

### Note to Reader:

This is a living document, so I will be adding more to the README, including how to deploy the bot, and how to integrate with your discord server. Stay tuned!
