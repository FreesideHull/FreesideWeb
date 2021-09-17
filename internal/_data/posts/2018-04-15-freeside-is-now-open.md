---
layout: layouts/post
title: Freeside Is Now Open!
date: "2018-04-15"
author: Kieran Coldron
tags: updates
---

All students should now be able to access Freeside. If you haven't visited yet details on how to find Freeside are [here](https://forums.freeside.co.uk/t/finding-the-freeside-room/50/1).

# Sign up Now!
We are excited to announce offically that you can now sign up to a Freeside account [here](https://profiles.freeside.co.uk/join)! With a Freeside account you can access any services we host and sign into the lab PCs.

# The New Room

![A picture of the Freeside room](https://i.imgur.com/t57p8l2.jpg)

In the Room we currently have 3 PCs with i5 processors and SSDs but, we may be able to acquire more if we can show evidence of the room being used. The PCs have Fedora 27 installed on them, this was chosen for it's ease of use for both users and admins. The machines are configured with a central login server as well as networked home directories. (You will not be able to access your University home directories from these computers but if you know how to do this please [help us](https://forums.freeside.co.uk/t/g-drive-mounting-script/30))
If you are wanting software installed on the machines you can follow the instructions to do so [here](https://github.com/FreesideHull/Freeside-Fabfiles) or make a request [here](https://forums.freeside.co.uk/c/freeside/requests).

# What Else Is New?
The most obvious change if you have previously visited this blog is the different look - that’s because we switched to [Jekyll!](https://jekyllrb.com/) Ghost was great, but because of the lack of LDAP support (the system we use to centralise logins) we decided to drop it for a static [git managed](https://github.com/FreesideHull/Freeside-Blog) site.


We now have a [Forum](https://forums.freeside.co.uk) for discussion relating to Freeside, General chit chat and most importantly pictures of your cute cats. Be sure to head over to the Forum and [introduce yourself](https://forums.freeside.co.uk/c/introductions)!

![Nora and Milly laying in a basket](https://i.imgur.com/g5wewN6.jpg)

(Thank you Nichtvren for the cute cats!)

We also now have the following services: 
* [Gitlab](https://gitlab.freeside.co.uk) - Host your private repositories here or use as an alternative to Github. We will be sticking with Github for our main repos for now.
* [Continuous Delivery](https://ci.freeside.co.uk) - We are using [Drone](http://drone.io) to provide Continuous integration/Delivery linked to our Github.

We also now have comments on the blog using Discourse so once you have finished reading this blog post be sure to post a comment!

If you have a suggestion for a service that you want us to host be sure to request it here [here](https://forums.freeside.co.uk/c/freeside/issues).

# Contributing to Freeside

You can visit the [forum](https://forums.freeside.co.uk/c/freeside) to see if there is anything you can help with, or join our [Discord](http://discord.freeside.co.uk) to keep up to date with whats happening. If you need help we are usually always online.

# What's Next?

Joe is working on a new logo is in the works, here is a sneak peak.

<img alt="Freeside Logo" src="https://cdn.discordapp.com/attachments/364428045093699598/428533288957771779/unknown.png" style="width: 50%;"> 

Epictek(Kieran) is currently working on implementing OAuth with Github and Discord, This will allow getting new users on the Freeside github a lot simpler, The Discord OAuth will likely just be used to be verify that you are one of the awesome people to have signed up to a Freeside account.

Thanks to [Starbeamrainbowlabs](https://starbeamrainbowlabs.com/) for helping with proof reading.
