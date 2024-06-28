# Title: Personal portfolio
Description: virtual portfolio
Goal:
    preview projects → redirect to site in new tab
    about me + contact + linkedin, github, etc.
    mobile version with less animation, more pragmatic
Features: 
    scroll animations
    animated icons
    animated svg background
    download cv
Tools: react + tailwind css + hostinger

# Content: BattleMaster
Description: dynamic mobile app + tool for tabletop RPG in D&D 5e
Goal:
    quick add new player / monster
    DM: table of combat scores - auto reorder by initiative + track HP, effects, etc.
    player: add player, add damage, add effects, see who's next, see own spells, attacks, stats
Features: 
    add PC and NPC stats (str, dex, etc.) + AC + movement
    add damage in each round (victim: damage, attacker)
    calculate initiative, curr. HP and death saves
    modify status (paralyzed, grappled, poisoned  etc.) 
        API: https://5e-bits.github.io/docs/
Tools: react + tailwind css

# Content: Totem of Reflection
Description: interactive 3D model of the installation
Goal:
    translate weather data into movement and light (animation)
    interact with viewer based on where they are (z-axis scroll: distance, drag: rotate)
Features: 
    parallax scrolling
    AI interaction with some weather API (???)
    prepare data for RaspberryPi / Arduino
    mobile app version
Tools: react + tailwind css + r3f + ## python

# Content: Worthwhile
Description: eco-friendly financial tracker app
Goal: 
    add new item
    calculate possession data
    store user data
Features: 
    mobile-first design + front end functionality
    calculate user analytics
    add nostalgia
    show repair options
Tools: react + typescript + shadcn/ui + tailwind css

# Content: Cinemania
Description: movie ticket vendor webshop
Goal: 
    select diff. types of tickets
    search movies by multiple categories
Features: 
    cart functionalities
    admin page
    user login
Tools: react + tailwind css + firebase

# Content: PoMo App
Description: generative art composition web page
Goal: 
    create random architectural compositions or facades
    by mixng Aldo Rossi, Ricardo Bofill, Xavier Corbero
Features:
    tile components with var. arch. elements
    generate new pattern based on current weather and date
       Random Map Generator: https://donjon.bin.sh/code/dungeon/
    scroll animation
Tools: react + tailwind css + ## prisma