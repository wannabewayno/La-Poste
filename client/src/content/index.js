import typewriter from './images/backgroundImages/typewriter.jpg'
import table from './images/backgroundImages/table.jpg'

export const backgroundImageMap = {
    '/':{ image: typewriter, positionX:'center', positionY:'10vh'},
    '/dashboard':{ image: table, positionX:'center', positionY:'10vh'},
    '/signin':{ image: typewriter, positionX:'center', positionY:'10vh' },
}

export const palettes = {
    driftwood:{
        main:'rgb(156,147,114)',
        accent:'rgb(85,106,123)',
        neutral:'rgb(208,208,207)',
        dark:'rgb(10,19,18)',
        wildCard:'rgb(66,55,54)'
    },
    laFrance:{
        main:'rgb(230,57,70)',
        accent:'rgb(203,39,44)',
        neutral:'rgb(241,250,238)',
        dark:'rgb(29,53,98)',
        wildCard:'rgb(168,218,220)'
    },
    enzyme:{
        main:'rgb(127,198,164)',
        accent:'rgb(250,243,62)',
        neutral:'rgb(93,115,126)',
        dark:'rgb(85,80,92)',
        wildCard:'rgb(214,248,214)'
    },
    candy:{
        main:'rgb(172,172,222)',
        accent:'rgb(184,51,106)',
        neutral:'rgb(229,252,255)',
        dark:'rgb(127,60,144)',
        wildCard:'rgb(171,218,252)',
    },
    pastel:{
        main:'rgb(244,152,156)',
        accent:'rgb(172,236,247)',
        neutral:'rgb(214,246,221)',
        dark:'rgb(204,140,62)',
        wildCard:'rgb(218,196,247)',
    }

}