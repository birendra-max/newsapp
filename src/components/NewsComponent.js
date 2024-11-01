import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
    constructor() {
        super();
        this.state = {
            articles: [
                {
                    "source": { "id": null, "name": "Android Central" },
                    "author": "derrek.lee@futurenet.com (Derrek Lee)",
                    "title": "Motorola is using the Razr to come after your iPhones, and it's working",
                    "description": "Motorola has highlighted the success of the Razr series and how it's attracting many new users, particularly from iOS.",
                    "url": "https://www.androidcentral.com/phones/motorola-razr-stealing-away-iphone-users",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/GwKmAwiQxZYh9Ko3dffT8i-1200-80.jpg",
                    "publishedAt": "2024-10-26T18:00:00Z",
                    "content": "Getting consumers to move from iOS to Android (or vice versa) is no easy feat, and companies like Samsung and Google have been trying various ways to convince users to make the switch, to some degree… [+9541 chars]"
                },
                {
                    "source": { "id": null, "name": "Android Central" },
                    "author": "derrek.lee@futurenet.com (Derrek Lee)",
                    "title": "News Weekly: Snapdragon 8 Elite launches with Oryon cores, Samsung's souped-up Galaxy Z Fold Special Edition, and more",
                    "description": "Qualcomm's powerful new Snapdragon 8 Elite has landed, Samsung releases a special edition Galaxy Z Fold 6, and more.",
                    "url": "https://www.androidcentral.com/phones/news-weekly-october-26-2024",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/rRUXiFcY6iXrsZAHShZKPR-1200-80.jpg",
                    "publishedAt": "2024-10-26T12:00:00Z",
                    "content": "(Image credit: Android Central)\r\nNews Weekly is our column where we highlight and summarize some of the week's top stories so you can catch up on the latest tech news.\r\nThis is Android Central's News… [+6607 chars]"
                },
                {
                    "source": { "id": null, "name": "MacRumors" },
                    "author": "MacRumors Staff",
                    "title": "Top Stories: M4 Macs Next Week, iOS 18.2 Beta, and More",
                    "description": "Apple's flurry of activity to close out October is well underway, led on the hardware side by the launch of the new iPad mini and Apple uncharacteriscally teasing some Mac updates for next week even without an announced event.\n\n\n\n\n\nOn the software side, Apple…",
                    "url": "https://www.macrumors.com/2024/10/26/top-stories-m4-macs-next-week/",
                    "urlToImage": "https://images.macrumors.com/t/6GtOSzxhrnzDdStKwKMft7boj1s=/1600x/article-new/2024/10/top-stories-26oct2024.jpg",
                    "publishedAt": "2024-10-26T13:00:00Z",
                    "content": "Apple's flurry of activity to close out October is well underway, led on the hardware side by the launch of the new iPad mini and Apple uncharacteriscally teasing some Mac updates for next week even … [+4272 chars]"
                },
                {
                    "source": { "id": null, "name": "CNET" },
                    "author": "David Lumb",
                    "title": "Qualcomm's Snapdragon 8 Elite Chip Will Make Your Phone Less Annoying",
                    "description": "From faster app switching and web browsing to improved selfies, next year's Android phones have a lot to gain from the Snapdragon Elite chip.",
                    "url": "https://www.cnet.com/tech/mobile/qualcomms-snapdragon-8-elite-chip-will-make-your-phone-less-annoying/",
                    "urlToImage": "https://www.cnet.com/a/img/resize/929490255bc70b19f3a56eb56544d6e3713d4e10/hub/2024/10/25/1b6af902-42af-4184-a3fe-917d09bb7226/snap-qol-lede-and-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
                    "publishedAt": "2024-10-26T11:00:00Z",
                    "content": "Chief among Qualcomm's newest chips is the Snapdragon 8 Elite, which will bring more AI features and faster speeds to next year's top-tier Android phones. It was announced at the Snapdragon Summit 20… [+7668 chars]"
                },
                {
                    "source": { "id": "business-insider", "name": "Business Insider" },
                    "author": "Eve Crosbie",
                    "title": "How Bruce Springsteen, 75, stays in shape for his 3-hour-plus concerts",
                    "description": "Bruce Springsteen's new documentary offers some fresh insight into how he manages to stay in shape.",
                    "url": "https://www.businessinsider.com/bruce-springsteen-how-stays-in-shape-at-75-diet-exercise-2024-10",
                    "urlToImage": "https://i.insider.com/671ba98201ea6d83dee4103c?width=1200&format=jpeg",
                    "publishedAt": "2024-10-26T10:24:17Z",
                    "content": "Bruce Springsteen in Las Vegas.Jeff Kravitz/FilmMagic/Getty Images\r\n<ul><li>Bruce Springsteen's new documentary offers some fresh insight into how he manages to stay in shape.</li><li>He follows up c… [+3323 chars]"
                },
                {
                    "source": { "id": "fox-news", "name": "Fox News" },
                    "author": "Kurt Knutsson, CyberGuy Report",
                    "title": "Secret trick to send a text message again with iOS 18's new Send Later feature",
                    "description": "Apple's iOS 18 has brought a game-changing feature to the Messages app, allowing users the ability to schedule text messages for future delivery.",
                    "url": "https://www.foxnews.com/tech/secret-trick-send-text-message-again-ios-18s-new-send-later-feature",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/2-Why-the-National-Security-Agency-is-urging-Americans-to-reboot-our-phones-once-a-week-details.jpg",
                    "publishedAt": "2024-10-26T10:00:36Z",
                    "content": "Are you tired of forgetting to send important messages at the right time?\r\nIOS 18\r\n brings a game-changing feature to the Messages app the ability to schedule text messages for future delivery. \r\nThi… [+5474 chars]"
                },
                {
                    "source": { "id": null, "name": "Daringfireball.net" },
                    "author": "John Gruber",
                    "title": "★ Vision Pro Bites Dog",
                    "description": "It’s almost as though — hear me out — Apple launched Vision Pro in 2023 for long-term strategic reasons, not with short-term sales in mind.",
                    "url": "https://daringfireball.net/2024/10/vision_pro_bites_dog",
                    "urlToImage": "https://daringfireball.net/graphics/df-wide-card.png",
                    "publishedAt": "2024-10-26T01:45:39Z",
                    "content": "Wayne Ma and Qianer Liu, reporting for The Information (paywalled, alas — here’s Techmeme’s roundup of summaries and regurgitations), “Apple Sharply Scales Back Production of Vision Pro”:\n\n\n Apple ha… [+8559 chars]"
                },
                {
                    "source": { "id": null, "name": "Digital Trends" },
                    "author": "Nadeem Sarwar",
                    "title": "Android 16 might give its own spin to iPhone’s Dynamic Island alerts",
                    "description": "The iPhone's Dynamic Island notifications are a cleaver idea. In Android 16, apps might pull off something similar, but slotted within the status bar.",
                    "url": "https://www.digitaltrends.com/mobile/android-16-rich-ongoing-notification-feature-iphone-dynamic-island-alerts-leak/",
                    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/04/dynamic-spot-pill-how-to-add-dynamic-island-to-android-1.jpg?resize=1200%2C630&p=1",
                    "publishedAt": "2024-10-26T16:54:25Z",
                    "content": "Over the past few weeks, we’ve come across some interesting details about the next major build of Android. Currently in development under the apparent codename of “Baklava,” Android 16 will reportedl… [+2726 chars]"
                },
                {
                    "source": { "id": null, "name": "Digital Trends" },
                    "author": "Tushar Mehta",
                    "title": "Android 15: everything you need to know",
                    "description": "Google’s next major update for smartphones is here. and will trickle down to countless other devices over the next several months. Android 15 has eschewed visual updates and instead tidies up the interface and improves existing features. It also gets a number…",
                    "url": "https://www.digitaltrends.com/mobile/android-15/",
                    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/10/Android-15-hero.jpg?resize=1200%2C630&p=1",
                    "publishedAt": "2024-10-26T11:30:41Z",
                    "content": "Google’s next major update for smartphones is here. Android 15 rolled out to Pixel devices on October 15 and will trickle down to countless other devices over the next several months. Android 15 has … [+14086 chars]"
                },
                {
                    "source": { "id": null, "name": "heise online" },
                    "author": "Niklas Jan Engelking",
                    "title": "Deutsche Post kündigt Portokassen für Privatkunden",
                    "description": "Die deutsche Post wird nur noch bis Ende des Jahres Portokassen für Privatkunden anbieten. Darüber informierte sie jetzt per E-Mail.",
                    "url": "https://www.heise.de/news/Deutsche-Post-kuendigt-Portokassen-fuer-Privatkunden-9995425.html",
                    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/9/6/7/0/3/shutterstock_1638372418-ba0097f05543ed98.jpg",
                    "publishedAt": "2024-10-26T15:47:00Z",
                    "content": "Manche dürften sich über diese E-Mail in ihrem Postfach gewundert haben: Die Deutsche Post beendet das Angebot der Portokasse für Privatkunden zum 31. Dezember des laufenden Jahres. Die Portokassen w… [+1698 chars]"
                },
                {
                    "source": { "id": null, "name": "heise online" },
                    "author": "Gerald Himmelein",
                    "title": "40 Jahre \"Terminator\": Er kommt immer wieder",
                    "description": "Vor 40 Jahren kam der SciFi-Thriller \"The Terminator\" in die US-Kinos. Der Film machte Arnold Schwarzenegger zum Superstar und Jim Cameron zum Erfolgsregisseur.",
                    "url": "https://www.heise.de/hintergrund/40-Jahre-Terminator-Er-kommt-immer-wieder-9995108.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
                    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/9/6/5/4/1/aufmacher_option_1-b4d112bb3e78feb0.jpg",
                    "publishedAt": "2024-10-26T05:45:00Z",
                    "content": "Inhaltsverzeichnis\r\nAm Anfang stand verdorbenes Essen: Eine Lebensmittelvergiftung bescherte James Cameron einen grässlichen Albtraum, in dem ihn ein mit Messern bewaffnetes Metallskelett angriff. Au… [+7121 chars]"
                },
                {
                    "source": { "id": null, "name": "9to5Mac" },
                    "author": "Michael Burkhardt",
                    "title": "Apple didn’t update the iPad 11 this year, and this is probably why",
                    "description": "Apple refreshed the iPad mini last week, with an A17 Pro chip and support for Apple Intelligence. However, that was...",
                    "url": "https://9to5mac.com/2024/10/26/ipad-11-no-2024-update-ai/",
                    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/siri-ios18.1-ai-ipad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "2024-10-26T13:16:12Z",
                    "content": "Apple refreshed the iPad mini last week, with an A17 Pro chip and support for Apple Intelligence. However, that was the only announcement. There was no refresh to the base model iPad. This had previo… [+4988 chars]"
                },
                {
                    "source": { "id": null, "name": "9to5Mac" },
                    "author": "Michael Burkhardt",
                    "title": "Repair YouTuber creates upgradable SSD storage modules for Apple Silicon MacBooks",
                    "description": "Ever since the 2016 models with Touch Bar, Apple has been soldering the SSD storage to the logic boards, preventing users from easily being able to easily upgrade or swap the drives in their devices. \n\n\n\nHowever, a repair YouTuber known as iBoff, who describe…",
                    "url": "https://9to5mac.com/2024/10/26/youtuber-m1-macbook-ssd-upgradability/",
                    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/10/image_235596.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "2024-10-26T14:54:55Z",
                    "content": "Ever since the 2016 MacBook Pro models with Touch Bar, Apple has been soldering the SSD storage to the logic boards, preventing users from easily being able to easily upgrade or swap the drives in th… [+2812 chars]"
                },
                {
                    "source": { "id": null, "name": "Android Police" },
                    "author": "Sanuj Bhatia",
                    "title": "After one week with Apple TV, I'm ready to ditch my Chromecast and Fire Stick",
                    "description": "After a week with Apple TV, my Chromecast and Fire Stick are collecting dust — here's why",
                    "url": "https://www.androidpolice.com/apple-tv-4k-one-week-experience-impressions/",
                    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/10/apl-tv.jpg",
                    "publishedAt": "2024-10-26T00:39:10Z",
                    "content": "When it comes to the best streaming devices, most people go for budget-friendly options like the Chromecast or Amazon Fire TV Stick and for good reason. These options have been solid performers, and … [+5101 chars]"
                },
                {
                    "source": { "id": null, "name": "Thekitchn.com" },
                    "author": "Kristina Razon",
                    "title": "This \"Chocolate Chip Cookie Delight\" Is So Good, I Always Save an Extra Slice",
                    "description": "Five layers of classic chocolate chip cookie flavor.\nREAD MORE...",
                    "url": "https://www.thekitchn.com/chocolate-chip-cookie-delight-recipe-review-23688836",
                    "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-06-cookie-ice-box-cake%2Fchocolate-chip-cookie-delight-0023",
                    "publishedAt": "2024-10-26T15:30:00Z",
                    "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nI love a warm, fresh-out-of-the-oven chocolate … [+1565 chars]"
                },
                {
                    "source": { "id": null, "name": "AppleInsider" },
                    "author": "news@appleinsider.com (Charles Martin)",
                    "title": "Apple Intelligence Image Playground, Genmoji testers face long wait",
                    "description": "Apple says it will be allowing access to forthcoming image-creation tools like Image Wand, Genmoji, and Image Playground \"over the coming weeks,\" making for an unusually long waitlist for testers.Developers are waiting to test the Apple Intelligence graphics …",
                    "url": "https://appleinsider.com/articles/24/10/26/apple-intelligence-image-playground-genmoji-testers-face-long-wait",
                    "urlToImage": "https://photos5.appleinsider.com/gallery/61537-127128-59992-123046-IMG_0171-xl-xl.jpg",
                    "publishedAt": "2024-10-26T17:04:16Z",
                    "content": "Apple says it will be allowing access to forthcoming image-creation tools like Image Wand, Genmoji, and Image Playground \"over the coming weeks,\" making for an unusually long waitlist for testers.\r\nD… [+2097 chars]"
                },
                {
                    "source": { "id": null, "name": "AppleInsider" },
                    "author": "news@appleinsider.com (Charles Martin)",
                    "title": "Judge awards Apple a token $250 in its latest lawsuit against Masimo",
                    "description": "A Delaware jury has found smartwatch maker Masimo guilty of infringing Apple's Apple Watch patents on health technology, but limited it to only older smartwatch models that are no longer sold, and awarded the firm the least damages it legally could.Apple and …",
                    "url": "https://appleinsider.com/articles/24/10/26/judge-awards-apple-a-token-250-in-its-latest-lawsuit-against-masimo",
                    "urlToImage": "https://photos5.appleinsider.com/gallery/61536-127127-54039-108814-Blood-oxygen-xl-xl.jpg",
                    "publishedAt": "2024-10-26T15:36:31Z",
                    "content": "A Delaware jury has found smartwatch maker Masimo guilty of infringing Apple's Apple Watch patents on health technology, but limited it to only older smartwatch models that are no longer sold, and aw… [+2358 chars]"
                },
                {
                    "source": { "id": null, "name": "AppleInsider" },
                    "author": "news@appleinsider.com (Christine McKee)",
                    "title": "Month-end iPad sale: $298 10th Gen, M4 iPad Pro $899, iPad mini 7 deals",
                    "description": "Amazon's weekend deals see price cuts on the brand-new iPad mini 7, along with discounts on the 10th Gen, M4 iPad Pro and 2024 iPad Air.New discounts hit Apple iPads, even the new mini 7 - Image credit: AppleSelect models from Apple's entire iPad range are ma…",
                    "url": "https://appleinsider.com/articles/24/10/26/month-end-ipad-sale-298-10th-gen-m4-ipad-pro-899-ipad-mini-7-deals",
                    "urlToImage": "https://photos5.appleinsider.com/gallery/61540-127135-ipad-on-sale-pro-mini-7-10th-gen-xl.jpg",
                    "publishedAt": "2024-10-26T20:25:04Z",
                    "content": "Amazon's weekend deals see price cuts on the brand-new iPad mini 7, along with discounts on the 10th Gen, M4 iPad Pro and 2024 iPad Air.\r\nSelect models from Apple's entire iPad range are marked down … [+2041 chars]"
                },
                {
                    "source": { "id": null, "name": "AppleInsider" },
                    "author": "news@appleinsider.com (Charles Martin)",
                    "title": "YouTuber shows off hardware hack to replace soldered MacBook storage",
                    "description": "A YouTube video shows off a newly-developed technique to replace the soldered-on storage modules on most modern MacBook Pro and other MacBook models — but the upgrade is impractical and costly to do.Video shows replacement of original soldered storage with PC…",
                    "url": "https://appleinsider.com/articles/24/10/26/youtuber-shows-off-hardware-hack-to-replace-soldered-macbook-storage",
                    "urlToImage": "https://photos5.appleinsider.com/gallery/61539-127134-cropped-Screenshot-2024-10-26-at-114518-AM-xl.jpg",
                    "publishedAt": "2024-10-26T19:39:08Z",
                    "content": "A YouTube video shows off a newly-developed technique to replace the soldered-on storage modules on most modern MacBook Pro and other MacBook models — but the upgrade is impractical and costly to do.… [+1999 chars]"
                },
                {
                    "source": { "id": null, "name": "Gizmodo.jp" },
                    "author": "satomi",
                    "title": "Apple Intelligenceは競合AIに2年以上遅れている（アップル内部調査）",
                    "description": "Image:shutterstock23日のiPadmini発売にも間に合わなかったAppleIntelligence。26日には英語圏でいよいよ利用がスタートしますが、Apple公式サイトでPRされている4つの主なAI機能のうち、この日解禁になるのは通知サマリだけ。残り3つは12～3月に持ち越しとなります。競合のGoogle、OpenAI、Metaに水をあけられた感は否めません。そう感じているの",
                    "url": "https://www.gizmodo.jp/2024/10/apple-intelligence-is-more-than-two-years-behind-competing-ai.html",
                    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/10/25/shutterstock_2475720763.jpg?w=1280&h=630&f=jpg",
                    "publishedAt": "2024-10-26T13:30:00Z",
                    "content": "23iPad miniApple Intelligence\r\n26ApplePR4AI3123GoogleOpenAIMeta\r\nBloombergAppleOpenAIChatGPT AppleSiri2530%AppleAI2\r\nApple IntelligenceiPhone 1631000\r\n@mingchikuo / x\r\nAppleAIAIiPhone 16Apple20244202… [+114 chars]"
                },
                {
                    "source": { "id": null, "name": "CNET" },
                    "author": "Palash Volvoikar",
                    "title": "How to Keep Your Laptop Closed and Use a Monitor",
                    "description": "Just because you're using a monitor with a laptop doesn't mean you have to keep the lid open.",
                    "url": "https://www.cnet.com/tech/computing/how-to-keep-your-laptop-closed-and-use-a-monitor/",
                    "urlToImage": "https://www.cnet.com/a/img/resize/6d05b4546df3a2b029a6eeb961ab68cc56636eb2/hub/2024/04/29/048ba486-4d01-48ea-bfdf-36ff03d3b7a0/use-laptop-with-lid-closed.jpg?auto=webp&fit=crop&height=675&width=1200",
                    "publishedAt": "2024-10-26T01:00:06Z",
                    "content": "Laptops are the perfect option for getting work done on the go. But let's face it: sometimes you just need a bigger screen to work with. Whether you need a desktop replacement setup or you just need … [+4663 chars]"
                },
                {
                    "source": { "id": null, "name": "Journal du geek" },
                    "author": "Thomas Estimbre",
                    "title": "iPad mini 8 : Apple préparerait une révolution pour son petit format",
                    "description": "L'iPad mini 7 arrive tout juste sur le marché que les rumeurs sur sa remplaçante arrivent. La plus que probable iPad mini 8 passerait enfin à l'OLED, mais il va falloir se montrer patient.",
                    "url": "https://www.journaldugeek.com/2024/10/26/ipad-mini-8-apple-preparerait-une-revolution-pour-son-petit-format/",
                    "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/10/Apple-iPad-mini-7-blue.jpg",
                    "publishedAt": "2024-10-26T07:01:17Z",
                    "content": "Apple n’a pas attendu la fin du mois pour dévoiler une nouvelle tablette, officialisant son nouvel iPad mini à la mi-octobre. L’iPad mini 7 ne révolutionne pas le genre, mais la nouvelle ardoise appo… [+2511 chars]"
                },
                {
                    "source": { "id": null, "name": "Journal du geek" },
                    "author": "Journal du Geek",
                    "title": "Les propriétaires de vieux Mac lents jubilent : ce logiciel les fait redevenir comme neufs",
                    "description": "Vous avez des problèmes de lenteur avec votre Mac ? Vous envisagez d'en acheter un nouveau mais vos finances ne vous le permettent pas ? Voici une solution bon marché et efficace qui peut considérablement rallonger sa durée de vie.",
                    "url": "https://www.journaldugeek.com/bon-plan/les-proprietaires-de-vieux-mac-lents-jubilent-ce-logiciel-les-fait-redevenir-comme-neufs/",
                    "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/03/MacBook.jpg",
                    "publishedAt": "2024-10-26T06:12:32Z",
                    "content": "S’ils sont réputés rapides et efficace, les ordinateurs sous macOS connaissent tous à un moment donné une baisse de régime. Comme les machines sous Windows, ils deviennent plus lents au fil du temps.… [+3784 chars]"
                },
                {
                    "source": { "id": null, "name": "Applesfera.com" },
                    "author": "Álvaro García M.",
                    "title": "He confirmado que watchOS 11 estaba drenando la batería de mi Apple Watch. Le di la vuelta con estos cambios y he ganado más horas de autonomía",
                    "description": "No es cosa tuya, es una realidad que los Apple Watch tienen menor autonomía desde que llegó watchOS 11. Fue en septiembre cuando se lanzó esta versión y aunque ya hemos tenido una actualización con watchOS 11.0.1 y que también tenemos ya la beta final de watc…",
                    "url": "https://www.applesfera.com/tutoriales/he-confirmado-que-watchos-11-estaba-drenando-bateria-mi-apple-watch-le-di-vuelta-estos-cambios-he-ganado-horas-autonomia",
                    "urlToImage": "https://i.blogs.es/95118d/apple-watch/840_560.jpeg",
                    "publishedAt": "2024-10-26T15:02:01Z",
                    "content": "No es cosa tuya, es una realidad que los Apple Watch tienen menor autonomía desde que llegówatchOS 11. Fue en septiembre cuando se lanzó esta versión y aunque ya hemos tenido una actualización con wa… [+5379 chars]"
                },
                {
                    "source": { "id": null, "name": "Applesfera.com" },
                    "author": "Isra Fdez",
                    "title": "Esta serie justifica la suscripción de Apple TV+: la crítica la adora y yo estoy completamente enganchado a su trama",
                    "description": "Nadie se esperaba esto. Quienes hayáis visto la serie ya sabéis que el final estaba perfectamente cerrado, con todas las tramas concluidas. O eso creíamos. Hablamos de 'Hermanas hasta la muerte', una de las mejores series de Apple TV+. Rodada en Dublín, en re…",
                    "url": "https://www.applesfera.com/servicios-apple/esta-serie-justifica-suscripcion-apple-tv-critica-adora-yo-estoy-completamente-enganchado-a-su-trama",
                    "urlToImage": "https://i.blogs.es/b26f2b/bad_sisters_photo_020101/840_560.jpeg",
                    "publishedAt": "2024-10-26T11:02:01Z",
                    "content": "Nadie se esperaba esto. Quienes hayáis visto la serie ya sabéis que el final estaba perfectamente cerrado, con todas las tramas concluidas. O eso creíamos. Hablamos de 'Hermanas hasta la muerte', una… [+3254 chars]"
                },
                {
                    "source": { "id": null, "name": "Applesfera.com" },
                    "author": "Guille Lomener",
                    "title": "Steve Jobs dejó claro lo que pensaba de los consultores. Y lo hizo justo delante de ellos",
                    "description": "Steve Jobs, más allá de inventar el iPhone, era una persona con algunas declaraciones muy polémicas. Por ejemplo, le dijo al CEO de Starbucks que despidiera a toda la junta directiva, y la anécdota que te vamos a contar hoy va por la misma línea. Y es que Ste…",
                    "url": "https://www.applesfera.com/curiosidades/steve-jobs-dejo-claro-que-pensaba-consultores-hizo-justo-delante-ellos",
                    "urlToImage": "https://i.blogs.es/8acadc/steve-jobs/840_560.jpeg",
                    "publishedAt": "2024-10-26T09:02:00Z",
                    "content": "Steve Jobs, más allá de inventar el iPhone, era una persona con algunas declaraciones muy polémicas. Por ejemplo, le dijo al CEO de Starbucks que despidiera a toda la junta directiva, y la anécdota q… [+2937 chars]"
                },
                {
                    "source": { "id": null, "name": "MakeUseOf" },
                    "author": "Yasir Mahmood",
                    "title": "These 6 Phones Are Affordable and Perfect for Kids",
                    "description": "Don't overspend while buying your child their first phone.",
                    "url": "https://www.makeuseof.com/affordable-and-perfect-phones-for-kids/",
                    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/10/pinwheel-phone.png",
                    "publishedAt": "2024-10-26T12:00:14Z",
                    "content": "Buying a phone for your child can be daunting, especially when you're on a budget. But don't worry, we've got you covered. We've scoured the market to find the best affordable phones that are perfect… [+7682 chars]"
                },
                {
                    "source": { "id": null, "name": "MakeUseOf" },
                    "author": "Tashreef Shareef",
                    "title": "These Snapdragon X Elite Laptops Give MacBooks a Run for Their Money",
                    "description": "Get MacBook performance and style without ditching Windows.",
                    "url": "https://www.makeuseof.com/best-snapdragon-x-elite-laptops/",
                    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/06/asus-snapdragon-x-elite-laptop.jpg",
                    "publishedAt": "2024-10-26T13:30:14Z",
                    "content": "If you need a productivity device with an all-day battery life and solid performance, MacBooks are a popular choice. But if you prefer Windows to macOS, these Snapdragon X Elite laptops offer the per… [+7678 chars]"
                },
                {
                    "source": { "id": null, "name": "MakeUseOf" },
                    "author": "Danny Maiorca",
                    "title": "Albums Are Better Than Random Playlists, and Youll Never Convince Me Otherwise",
                    "description": "Albums come with specific benefits.",
                    "url": "https://www.makeuseof.com/why-streaming-albums-are-better-than-random-playlists/",
                    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/10/a-stylized-image-showing-a-record-player-with-a-vinyl-record-and-hand-1.jpg",
                    "publishedAt": "2024-10-26T10:00:14Z",
                    "content": "I dont like listening to other peoples playlists because most of the time, they arent curated for me. At worst, I find that they result in me getting distracted. Albums, on the other hand, give me a … [+5869 chars]"
                },
                {
                    "source": { "id": null, "name": "Presse-citron" },
                    "author": "Romain Vitt",
                    "title": "Test Pressé de la Logitech MX Creative Console : la console qui simplifie la création et améliore la productivité",
                    "description": "Premier fruit de l'acquisition de Loupedeck par Logitech, la MX Creative Console promet de simplifier la création et améliorer la productivité, pour 229 euros. Nous l'avons testée.",
                    "url": "https://www.presse-citron.net/test-logitech-mx-creative-console/",
                    "urlToImage": "https://www.presse-citron.net/app/uploads/2024/10/mx-creative-console-test.jpg",
                    "publishedAt": "2024-10-26T09:09:38Z",
                    "content": "Un an après le rachat de Loupedeck, Logitech dévoile son premier contrôleur, baptisé MX Creative Console. Exit le boîtier monolithique traditionnel : la marque suisse fait le choix de séparer les fon… [+6164 chars]"
                },
                {
                    "source": { "id": null, "name": "Golem.de" },
                    "author": "Johannes Hiltscher",
                    "title": "Halbleiterfertigung: TSMC-Fab in Arizona läuft besser als in Taiwan",
                    "description": "Nach Problemen läuft es für TSMC in den USA besser, als der Fertiger es im Heimatland gewohnt ist. AMD soll zweiter Kunde werden. (Halbleiterfertigung, Apple)",
                    "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fhalbleiterfertigung-tsmc-fab-in-arizona-laeuft-besser-als-in-taiwan-2410-190200.html&referer=https%3A%2F%2Ft.co%2F3596452d22",
                    "urlToImage": null,
                    "publishedAt": "2024-10-26T09:35:02Z",
                    "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
                },
                {
                    "source": { "id": null, "name": "Xataka Android" },
                    "author": "Manuel Naranjo",
                    "title": "Después de probar el Samsung S-Pen y el Apple Pencil tengo claro cuál es el rey de los stylus",
                    "description": "En el mercado actual puedes encontrar muchos lápices ópticos de diferentes precios y marcas, pero no cabe duda de que hay dos que siempre han marcado la diferencia; por un lado, está el Apple Pencil de la marca con sede en Cupertino y por otro tenemos el S-Pe…",
                    "url": "https://www.xatakandroid.com/gadgets-android/despues-probar-samsung-s-pen-apple-pencil-tengo-claro-cual-rey-stylus",
                    "urlToImage": "https://i.blogs.es/9d978c/portada2/840_560.jpeg",
                    "publishedAt": "2024-10-26T11:02:02Z",
                    "content": "En el mercado actual puedes encontrar muchos lápices ópticos de diferentes precios y marcas, pero no cabe duda de que hay dos que siempre han marcado la diferencia; por un lado, está el Apple Pencil … [+3846 chars]"
                },
                {
                    "source": { "id": null, "name": "Xataka Android" },
                    "author": "Eva Rodriguez de Luis",
                    "title": "Google trabaja en una especie de isla dinámica para Android 16. Tiene todo el sentido",
                    "description": "Las notificaciones son una de las funciones clave de cualquier sistema operativo, especialmente aplicado al móvil, donde tenemos instaladas decenas de apps. De ahí que el área de notificaciones siempre esté sujeta a cambios para mejorarlas incluso aunque los …",
                    "url": "https://www.xatakandroid.com/sistema-operativo/android-16-se-inspirara-isla-dinamica-iphone-para-mostrar-notificaciones",
                    "urlToImage": "https://i.blogs.es/9414b2/isla-dinamica/840_560.jpeg",
                    "publishedAt": "2024-10-26T07:06:00Z",
                    "content": "Las notificaciones son una de las funciones clave de cualquier sistema operativo, especialmente aplicado al móvil, donde tenemos instaladas decenas de apps. De ahí que el área de notificaciones siemp… [+3269 chars]"
                },
                {
                    "source": { "id": null, "name": "Xataka Android" },
                    "author": "Eva Rodriguez de Luis",
                    "title": "Estas son las cinco aplicaciones de Android Auto que uso en todos mis viajes y recomiendo instalar",
                    "description": "Una de las grandes ventajas de Android Auto es la cantidad y la calidad de aplicaciones compatibles. Llevo años probándolas, tanto por curiosidad como por mi trabajo, lo que me ha permitido conocer sus fortalezas y debilidades, pero también encontrar las que …",
                    "url": "https://www.xatakandroid.com/aplicaciones-android/estas-cinco-aplicaciones-android-auto-que-uso-todos-mis-viajes-recomiendo-instalar",
                    "urlToImage": "https://i.blogs.es/e3d2bc/rimusic/840_560.jpeg",
                    "publishedAt": "2024-10-26T08:02:00Z",
                    "content": "Una de las grandes ventajas de Android Auto es la cantidad y la calidad de aplicaciones compatibles. Llevo años probándolas, tanto por curiosidad como por mi trabajo, lo que me ha permitido conocer s… [+3577 chars]"
                },
                {
                    "source": { "id": null, "name": "Android Authority" },
                    "author": "Hadlee Simons",
                    "title": "Smartphone photography has moved on, but Samsung is still stuck in 2021",
                    "description": "Smartphone camera hardware has made major strides in the last few years, but you might not know it if you have a Samsung phone.",
                    "url": "https://www.androidauthority.com/samsung-google-camera-hardware-old-3474674/",
                    "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/08/Pixel-9-vs-Galaxy-S24-cameras.jpg",
                    "publishedAt": "2024-10-26T17:00:32Z",
                    "content": "Software has seemingly become just as important (if not more important) than hardware when it comes to the best camera phones. In fact, I bought my Pixel 7 Pro back in 2022 because I thought it provi… [+4839 chars]"
                },
                {
                    "source": { "id": null, "name": "Android Authority" },
                    "author": "Ryan Haines",
                    "title": "Motorola doesn’t stand a chance against Samsung without software updates",
                    "description": "Sorry, Motorola, but a budget phone just isn't worth it if I'm only going to get software updates for one year.",
                    "url": "https://www.androidauthority.com/motorola-vs-samsung-software-updates-3493366/",
                    "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/06/Samsung-Galaxy-A35-vs-Moto-G-5G-vs-Pixel-8a-upright.jpg",
                    "publishedAt": "2024-10-26T18:00:04Z",
                    "content": "As a general rule, I like Motorolas approach to Android. I like that its close relationship with Google is still visible in the current state of HelloUX. Id grab its Razr Plus (2024) over Samsungs Ga… [+10490 chars]"
                },
                {
                    "source": { "id": null, "name": "Android Authority" },
                    "author": "Robert Triggs",
                    "title": "Has Qualcomm finally secured its vice-like grip on Android flagships?",
                    "description": "Qualcomm's Snapdragon 8 Elite promises a new era of smartphone performance, but what does this mean for its increasingly struggling rivals?",
                    "url": "https://www.androidauthority.com/what-now-for-snapdragon-rivals-3492460/",
                    "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/10/Snapdragon-8-Elite-chip-in-hand.jpg",
                    "publishedAt": "2024-10-26T14:00:36Z",
                    "content": "If early benchmarks are to be believed, Qualcomms new Snapdragon 8 Elite is a serious workhorse that easily outpaces current Android and even Apple smartphones. Obviously, this will cause other silic… [+7969 chars]"
                },
                {
                    "source": { "id": null, "name": "Les Numériques" },
                    "author": "Florent Lanne",
                    "title": "Dossier : Apple Intelligence : tout ce que vous devez savoir sur la nouvelle IA de l'iPhone, de l'iPad et du Mac",
                    "description": "Apple s'apprête à déployer Apple Intelligence sur ses iPhone, iPad et Mac compatibles. Voici tout ce que vous devez savoir sur le sujet : les appareils qui l'acceptent, la disponibilité et les nouvelles fonctionnalités.",
                    "url": "https://www.lesnumeriques.com/telephone-portable/apple-intelligence-tout-ce-que-vous-devez-savoir-sur-la-nouvelle-ia-de-l-iphone-de-l-ipad-et-du-mac-a228020.html",
                    "urlToImage": "https://cdn.lesnumeriques.com/optim/article/22/228020/86d2cc2a-apple-intelligence-tout-ce-que-vous-devez-savoir-sur-la-nouvelle-ia-de-la-firme-de-cupertino__1200_678__overflow.jpg",
                    "publishedAt": "2024-10-26T16:00:00Z",
                    "content": "Après qu'Apple a annoncé Apple Intelligence lors de sa conférence annuelle WWDC en juin 2024, les fonctionnalités inhérentes à ce noyau d'IA sont très attendues par de nombreux utilisateurs. Pourtant… [+6782 chars]"
                },
                {
                    "source": { "id": null, "name": "Les Numériques" },
                    "author": "Roch Arène",
                    "title": "Profitez des meilleures technologies de jeux vidéo sans investir dans une console ou un PC gaming coûteux",
                    "description": "Quand une plateforme de cloud gaming permet de jouer depuis de n'importe quel appareil, avec des graphismes sublimes et d'excellentes performances, le tout pour un prix raisonnable, cela fait réfléchir. Est-il encore nécessaire, en 2024, de dépenser une fortu…",
                    "url": "https://www.lesnumeriques.com/publicite/profitez-des-meilleures-technologies-de-jeux-video-sans-investir-dans-une-console-ou-un-pc-gaming-couteux-227741.html",
                    "urlToImage": "https://cdn.lesnumeriques.com/optim/native/22/227741/9fbe7d1b-pourquoi-depenser-autant-dans-une-console-ou-un-pc-cette-alternative-est-imbattable__1200_678__0-43-1996-1090.jpg",
                    "publishedAt": "2024-10-26T06:00:00Z",
                    "content": "Quand une plateforme de cloud gaming permet de jouer depuis de n'importe quel appareil, avec des graphismes sublimes et d'excellentes performances, le tout pour un prix raisonnable, cela fait réfléch… [+4367 chars]"
                },
                {
                    "source": { "id": null, "name": "Les Numériques" },
                    "author": "Julien Vercoutère",
                    "title": "Test Huawei MatePad Pro 12.2 PaperMatte Edition : un nouveau chapitre dans l'histoire des tablettes",
                    "description": "Huawei mise plus que jamais sur sa technologie PaperMatte, appliquée ici à sa MatePad Pro 12.2, une tablette haut de gamme qui entend rivaliser avec les modèles les plus huppés du marché. L'appareil tourne néanmoins sous HarmonyOS, ce qui implique de renoncer…",
                    "url": "https://www.lesnumeriques.com/tablette-tactile/huawei-matepad-12-2-2024-p75630/test.html",
                    "urlToImage": "https://cdn.lesnumeriques.com/optim/test/22/227931/3b70aae0-a-illustrer-huawei-matepad-pro-12-2-papermatte-edition-un-nouveau-chapitre-dans-l-histoire-des-tablettes__1200_678__0-263-6000-3413.jpg",
                    "publishedAt": "2024-10-26T05:00:00Z",
                    "content": "Huawei mise plus que jamais sur sa technologie PaperMatte, appliquée ici à sa MatePad Pro 12.2, une tablette haut de gamme qui entend rivaliser avec les modèles les plus huppés du marché. L'appareil … [+9249 chars]"
                },
                {
                    "source": { "id": null, "name": "Xatakamovil.com" },
                    "author": "Eduardo Marín",
                    "title": "El iPhone pierde el trono en China. Las marcas locales mandan, y hay una que no para de crecer",
                    "description": "Después de casi cuatro años, Huawei ha superado a Apple en ventas de smartphones en China. Se trata de un hito que no sólo habla del resurgimiento de la marca asiática en su mercado local, tras años de dificultades, sino también cómo ha evolucionado la estrat…",
                    "url": "https://www.xatakamovil.com/mercado/iphone-pierde-trono-china-marcas-locales-mandan-hay-que-no-para-crecer",
                    "urlToImage": "https://i.blogs.es/05cd41/iphone-china/840_560.jpeg",
                    "publishedAt": "2024-10-26T18:32:17Z",
                    "content": "Después de casi cuatro años, Huawei ha superado a Apple en ventas de smartphones en China. Se trata de un hito que no sólo habla del resurgimiento de la marca asiática en su mercado local, tras años … [+4174 chars]"
                },
                {
                    "source": { "id": null, "name": "Rolling Stone" },
                    "author": "Maria Fontoura",
                    "title": "Can a Sneaker Fanatic Win the Hypebeast Game With Homemade Kicks?",
                    "description": "A fan of Nike Dunks tries to subvert the resale market by making his own pair from scratch with Tik Tok star Matthew Keyes as his teacher.",
                    "url": "http://www.rollingstone.com/culture/culture-features/nike-dunk-hypebeast-homemade-sneaker-1235143096/",
                    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/10/hypebeast-nikes.jpg?w=1600&h=900&crop=1",
                    "publishedAt": "2024-10-26T13:30:00Z",
                    "content": "I got out of the Uber in industrial Brooklyn, trying to get my bearings on this sweatbox morning. There was no address on the brewery to my right or the scrapyard across the street. I tried the front… [+11011 chars]"
                },
                {
                    "source": { "id": null, "name": "IndieWire" },
                    "author": "Chris O'Falt",
                    "title": "‘Disclaimer’: Alfonso Cuarón Says Episode 5 Is Not About Cancel Culture, but Something Darker",
                    "description": "Cuarón talks to IndieWire about the aesthetics of authoritarianism and how social media and smartphones are leading us down a dark road.",
                    "url": "https://www.indiewire.com/features/interviews/disclaimer-alfonso-cuaron-episode-5-cancel-culture-1235059716/",
                    "urlToImage": "https://www.indiewire.com/wp-content/uploads/2024/10/Disclaimer-Episode-5.jpeg?w=650",
                    "publishedAt": "2024-10-26T14:00:00Z",
                    "content": "[Editor’s note: This story contains spoilers for “Disclaimer” Episode 5.]\r\nIn Episode 5 of “Disclaimer,” Stephen Brigstocke’s (Kevin Kline) plan to destroy Catherine Ravenscroft (Cate Blanchett) is g… [+3959 chars]"
                },
                {
                    "source": { "id": null, "name": "IndieWire" },
                    "author": "Ryan Lattanzio",
                    "title": "‘Here’ Review: Robert Zemeckis Rues Time Lost, Gained, and Wasted with a De-Aged Tom Hanks and Robin Wright",
                    "description": "AFI Fest: It's a \"Forrest Gump\" reunion in more ways than one, as Eric Roth co-writes an earnest Zemeckis experiment that spans many lifetimes on the same spot on Earth.",
                    "url": "https://www.indiewire.com/criticism/movies/here-movie-review-robert-zemeckis-1235060293/",
                    "urlToImage": "https://www.indiewire.com/wp-content/uploads/2024/08/Here.jpg?w=650",
                    "publishedAt": "2024-10-26T04:30:00Z",
                    "content": "Life isn’t too short — it’s long, as Robert Zemeckis’ brisk, inventive, and earnest latest experiment, “Here,” ponders in an hour and 40 minutes that span multiple centuries and lifetimes unfolding o… [+9541 chars]"
                },
                {
                    "source": { "id": null, "name": "Frandroid" },
                    "author": "Geoffroy Husson",
                    "title": "Garmin, Apple, Samsung… pourquoi les écrans microLED sont attendus comme la prochaine révolution des montres connectées ?",
                    "description": "Après les écrans MIP, LCD et Amoled, la prochaine révolution dans le domaine des montres connectées pourrait être les écran microLED. On fait le point sur les avancées promises.",
                    "url": "https://www.frandroid.com/produits-android/accessoires-objets-connectes/montres-connectees-2/2377026_garmin-apple-samsung-pourquoi-les-ecrans-microled-sont-attendus-comme-la-prochaine-revolution-des-montres-connectees",
                    "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/10/garmin-fenix-8-2-1200x800-1.jpg",
                    "publishedAt": "2024-10-26T10:00:00Z",
                    "content": "Après les écrans MIP, LCD et Amoled, la prochaine révolution dans le domaine des montres connectées pourrait être les écran microLED. On fait le point sur les avancées promises. \r\nLa Garmin Fenix 8 p… [+8987 chars]"
                },
                {
                    "source": { "id": null, "name": "Frandroid" },
                    "author": "Sylvain Pichot",
                    "title": "Fire TV : rubriques, paramètres, fonctions… Tout savoir sur l’interface d’Amazon",
                    "description": "À la base, le système Fire TV était uniquement disponible sur les petits dispositifs connectés vendus par Amazon. Désormais, l’interface est aussi présente sur des téléviseurs des marques Panasonic, Xiaomi ou TCL, par exemple.",
                    "url": "https://www.frandroid.com/marques/amazon/2381658_fire-tv-rubriques-parametres-fonctions-tout-savoir-sur-linterface-damazon",
                    "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/10/fire-tv-logo-1200x631-1.jpg",
                    "publishedAt": "2024-10-26T16:02:00Z",
                    "content": "À la base, le système Fire TV était uniquement disponible sur les petits dispositifs connectés vendus par Amazon. Désormais, l’interface est aussi présente sur des téléviseurs des marques Panasonic, … [+17234 chars]"
                },
                {
                    "source": { "id": null, "name": "Touchlab.jp" },
                    "author": "Nakimo",
                    "title": "【22%OFF】公式サイト秋本番セールで「SwitchBot 学習リモコン」が値下げ中",
                    "description": "SwitchBot公式サイトで、「SwitchBot 学習リモコン」が22%OFFで販売されています。 「SwitchBot 学習リモコン」は、これひとつでSwitchBot製品はもちろん家電からIoTデバイスまでコント […]©2019 \"Touch Lab - タッチ ラボ\".",
                    "url": "https://touchlab.jp/2024/10/switchbot-remote-sale/",
                    "urlToImage": "https://touchlab.jp/wp-content/uploads/2024/07/switchbot_universal_remote_22.jpg",
                    "publishedAt": "2024-10-26T09:06:10Z",
                    "content": "SwitchBot公式サイトで、「SwitchBot 学習リモコン」が22%OFFで販売されています。\n\n「SwitchBot 学習リモコン」は、これひとつでSwitchBot製品はもちろん家電からIoTデバイスまでコントロールできるユニバーサルリモコンです。主な特長は次のとおり：\n<ul>\n<li>\n世界初Matter対応のAV・テレビリモコン\r\n\n</li>\n<li>\n2.4インチの液晶画面… [+1605 chars]"
                },
                {
                    "source": { "id": null, "name": "Directoalpaladar.com" },
                    "author": "Joana Costa",
                    "title": "Este es el mes crucial para los limoneros: solo un gesto asegura su supervivencia en invierno",
                    "description": "El mes de octubre marca un momento clave para los limoneros, especialmente en climas donde las temperaturas comienzan a bajar. Este árbol, que adorna muchos jardines con su aroma y sus frutos, necesita cuidados especiales para enfrentar el invierno y sobreviv…",
                    "url": "https://www.directoalpaladar.com/huerto/este-mes-crucial-para-limoneros-solo-gesto-asegura-su-supervivencia-invierno",
                    "urlToImage": "https://i.blogs.es/29a746/pexels-gottapics-4051157/840_560.jpeg",
                    "publishedAt": "2024-10-26T11:02:01Z",
                    "content": "El mes de octubre marca un momento clave para los limoneros, especialmente en climas donde las temperaturas comienzan a bajar. Este árbol, que adorna muchos jardines con su aroma y sus frutos, necesi… [+2549 chars]"
                },
                {
                    "source": { "id": null, "name": "Directoalpaladar.com" },
                    "author": "Joana Costa",
                    "title": "Por qué los vasos salen blanquecinos de tu lavavajillas: el remedio casero que resuelve el problema",
                    "description": "Uno de los problemas más comunes al usar el lavavajillas es que los vasos de cristal salen con un aspecto blanquecino o como empañado, una lástima si se tiene en cuenta que esta máquina tiene que facilitarnos la vida, no complicarnosla.\n<!-- BREAK 1 -->\nEste …",
                    "url": "https://www.directoalpaladar.com/limpieza-y-orden/que-vasos-salen-blanquecinos-tu-lavavajillas-remedio-casero-que-resuelve-problema",
                    "urlToImage": "https://i.blogs.es/412f24/pexels-pavel-danilyuk-6612574/840_560.jpeg",
                    "publishedAt": "2024-10-26T08:02:00Z",
                    "content": "Uno de los problemas más comunes al usar el lavavajillas es que los vasos de cristal salen con un aspecto blanquecino o como empañado, una lástima si se tiene en cuenta que esta máquina tiene que fac… [+2234 chars]"
                },
                {
                    "source": { "id": null, "name": "GSMArena.com" },
                    "author": "Ro",
                    "title": "Apple is reportedly working on an app for prediabetics",
                    "description": "Apple has ventured into the health and wellness space with the Apple Watch and its other devices, and according to a Bloomberg report, the company is readying a new feature for prediabetics.\n\n\n\nAfter the ECG and the irregular heart rhythm, Apple introduced sl…",
                    "url": "https://www.gsmarena.com/apple_is_reportedly_working_on_an_app_for_prediabetics-news-65083.php",
                    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/08/lg-seeks-compensation-from-apple-for-microled-panels/-952x498w6/gsmarena_000.jpg",
                    "publishedAt": "2024-10-26T09:32:01Z",
                    "content": "Apple has ventured into the health and wellness space with the Apple Watch and its other devices, and according to a Bloomberg report, the company is readying a new feature for prediabetics.\r\nAfter t… [+858 chars]"
                },
                {
                    "source": { "id": null, "name": "GSMArena.com" },
                    "author": "Peter",
                    "title": "Deals: the new iPad mini is now available, the old one is still around and other Apple deals",
                    "description": "The new iPad mini became available globally earlier this week, so let’s check out the prices and some alternatives.\n\nThe Apple iPad mini (2024) now has 128GB storage in its base configuration and 8GB of RAM. The latter is paired with a downgraded A17 Pro chip…",
                    "url": "https://www.gsmarena.com/deals_the_new_ipad_mini_is_now_available_the_old_one_is_still_around_and_other_apple_deals-news-65068.php",
                    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/10/weekly-deals-25/-952x498w6/gsmarena_us.jpg",
                    "publishedAt": "2024-10-26T19:44:01Z",
                    "content": "The new iPad mini became available globally earlier this week, so lets check out the prices and some alternatives.\r\nThe Apple iPad mini (2024) now has 128GB storage in its base configuration and 8GB … [+2837 chars]"
                },
                {
                    "source": { "id": null, "name": "New Atlas" },
                    "author": "Paul Ridden",
                    "title": "PL2 Laser Cinema projector designed for \"true home theater enthusiasts\"",
                    "description": "Laser projectors can be great replacements for a room-dominating big-screen TV, but kids, cats and even fellow housemates can cause you to lose sight of the action if they move in front of the light. Ultra-short-throw models can nip such shadowplay in the bud…",
                    "url": "https://newatlas.com/home-entertainment/hisense-pl2-laser-cinema-projector/",
                    "urlToImage": "https://assets.newatlas.com/dims4/default/a3dbf62/2147483647/strip/true/crop/3048x1600+76+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F34%2F49%2F50985f5d48a7af0b4d4f3d17d0cf%2Fclose.jpg&na.image_optimisation=0",
                    "publishedAt": "2024-10-26T18:02:00Z",
                    "content": "Laser projectors can be great replacements for a room-dominating big-screen TV, but kids, cats and even fellow housemates can cause you to lose sight of the action if they move in front of the light.… [+2128 chars]"
                },
                {
                    "source": { "id": null, "name": "Creative Bloq" },
                    "author": "joe.foley@futurenet.com (Joe Foley)",
                    "title": "Black Friday is over a month away, but these deals on creative tech essentials will be hard to beat",
                    "description": "There are already massive savings on MacBooks, Apple Pencil Pro, SSDs, docks and more.",
                    "url": "https://www.creativebloq.com/tech/black-friday-is-over-a-month-away-but-these-deals-on-creative-tech-essentials-will-be-hard-to-beat",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/HbFgV4wV3AXjthBy8Bov3M-1200-80.jpg",
                    "publishedAt": "2024-10-26T15:08:04Z",
                    "content": "Black Friday seems to comes earlier every year. There's over a month until the symbolic date itself, and presumably a few weeks to go until most retailers start official Black Friday sales (Best Buy … [+741 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "Fran Besora",
                    "title": "El iPad 11 no se lanzará en 2024, pero no son para nada malas noticias",
                    "description": "Apple lanzó la semana pasada un nuevo iPad mini con un procesador A17 Pro renovado y, aparentemente, con el problema del jelly scrolling solucionado. No hubo más lanzamientos en la gama iPad, a pesar de que se esperaba la renovación del iPad de décima generac…",
                    "url": "https://www.lavanguardia.com/andro4all/apple/el-ipad-11-no-se-lanzara-en-2024-pero-no-son-para-nada-malas-noticias",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/ipad-2022-portada-ipad-11.jpeg?width=1200",
                    "publishedAt": "2024-10-26T07:01:40Z",
                    "content": "El iPad 11 podría llegar en 2025 con el procesador A18 y compatibilidad con Apple Intelligence\r\nApple lanzó la semana pasada un nuevo iPad mini con un procesador A17 Pro renovado y, aparentemente, co… [+2520 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "Fran Besora",
                    "title": "He usado un iPhone con Apple Intelligence durante dos semanas: ¿realmente merece la pena?",
                    "description": "Aunque las funciones de Apple Intelligence han estado disponibles en fase beta desde agosto, no serán oficiales hasta dentro de unos días, cuando Apple lance iOS 18.1. Las he estado utilizando en mi día a día y he podido formarme una idea de cómo son, si son …",
                    "url": "https://www.lavanguardia.com/andro4all/apple/he-usado-un-iphone-con-apple-intelligence-durante-dos-semanas-realmente-merece-la-pena",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/he-probado-las-funciones-de-apple-intelligence.jpeg?width=1200",
                    "publishedAt": "2024-10-26T13:31:15Z",
                    "content": "Te cuento mis impresiones sobre las funciones de Apple Intelligence\r\nAunque las funciones de Apple Intelligence han estado disponibles en fase beta desde agosto, no serán oficiales hasta dentro de un… [+2942 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "David Freire",
                    "title": "El proyecto secreto de Apple con los coches eléctricos tiene un aliado inesperado: una gran marca de China",
                    "description": "El artículo El proyecto secreto de Apple con los coches eléctricos tiene un aliado inesperado: una gran marca de China fue publicado originalmente en Andro4all.",
                    "url": "https://www.lavanguardia.com/andro4all/apple/el-proyecto-secreto-de-apple-con-los-coches-electricos-tiene-un-aliado-inesperado-una-gran-marca-de-china",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/apple-car-portada.jpg?width=1200",
                    "publishedAt": "2024-10-26T14:16:39Z",
                    "content": "Probablemente nunca veremos un Apple Car, pero poco a poco se van desvelando nuevos detalles de este proyecto cancelado / Imagen creada con Bing Image Creator\r\nA principios de este año supimos que Ap… [+3137 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "Fran Besora",
                    "title": "Este es sin duda el mejor cargador que le puedes comprar a tu iPhone",
                    "description": "Hace más de tres años, Apple lanzó la tecnología MagSafe con el iPhone 12, una revolución que facilita la carga de los dispositivos al colocarlos sobre una base circular magnética. Esta base asegura que los dispositivos estén bien sujetos y se carguen de mane…",
                    "url": "https://www.lavanguardia.com/andro4all/apple/este-es-sin-duda-el-mejor-cargador-que-le-puedes-comprar-a-tu-iphone",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/recomendacion-cargador-magsafe-oficial-de-apple.jpg?width=1200",
                    "publishedAt": "2024-10-26T13:00:26Z",
                    "content": "El cargador MagSafe de Apple es eficiente y cómodo\r\nHace más de tres años, Apple lanzó la tecnología MagSafe con el iPhone 12, una revolución que facilita la carga de los dispositivos al colocarlos s… [+2856 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "Sergio J. Ortiz",
                    "title": "Hundimiento histórico: el iPhone 13 Pro Max cae en picado en esta oferta",
                    "description": "¡Cómo nos gusta el iPhone 13 Pro Max de Apple! Vale que no es el smartphone más potente del mercado y que iOS 18 no tiene, ni de lejos, el nivel de personalización de Android... pero es un teléfono que ha resistido con estoicismo como un auténtico titán ante …",
                    "url": "https://www.lavanguardia.com/andro4all/ofertas/hundimiento-historico-el-iphone-13-pro-max-cae-en-picado-en-esta-oferta",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/iphone-13-pro-azul.1729876202.3056.jpg?width=1200",
                    "publishedAt": "2024-10-26T18:30:31Z",
                    "content": "El iPhone 13 Pro Max de Apple tiene un diseño muy elegante y jovial\r\n¡Cómo nos gusta el iPhone 13 Pro Max de Apple! Vale que no es el smartphone más potente del mercado y que iOS 18 no tiene, ni de l… [+3424 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "Fran Besora",
                    "title": "No lo veremos hasta 2025, pero se ha filtrado el iPhone 17 Air al completo",
                    "description": "Los iPhone 16 y iPhone 16 Pro llevan poco más de un mes en el mercado, pero los rumores ya están enfocados en la serie iPhone 17. En particular, en el iPhone 17 Air, un modelo que romperá completamente los esquemas, ya que será muy diferente del modelo Plus, …",
                    "url": "https://www.lavanguardia.com/andro4all/apple/no-lo-veremos-hasta-2025-pero-se-ha-filtrado-el-iphone-17-air-al-completo",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/iphone-17-air-filtrado-al-completo.jpeg?width=1200",
                    "publishedAt": "2024-10-26T10:31:15Z",
                    "content": "Estas serían las novedades del iPhone 17 Air\r\nLos iPhone 16 y iPhone 16 Pro llevan poco más de un mes en el mercado, pero los rumores ya están enfocados en la serie iPhone 17. En particular, en el iP… [+2627 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "Sergio J. Ortiz",
                    "title": "Oportunidad de oro para comprar un iPhone 11 Pro Max mucho \"Max\" barato",
                    "description": "¿Estás pensando en comprarte un buen teléfono móvil pero sin gastarte miles y miles de euros? En ese caso te recomendamos dos opciones: consultar esta guía con los mejores móviles Android de gama media o echarle un buen vistazo a este iPhone 11 Pro Max que es…",
                    "url": "https://www.lavanguardia.com/andro4all/ofertas/comprar-iphone-11-pro-max-mas-barato-oferta",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/iphone-11-pro-max1.1711628791.2171.1726217185.0907.jpeg?width=1200",
                    "publishedAt": "2024-10-26T14:00:40Z",
                    "content": "Este iPhone 11 Pro Max está mucho más barato y representa una oportunidad única\r\n¿Estás pensando en comprarte un buen teléfono móvil pero sin gastarte miles y miles de euros? En ese caso te recomenda… [+3372 chars]"
                },
                {
                    "source": { "id": null, "name": "La Vanguardia" },
                    "author": "Fran Besora",
                    "title": "Todo lo que ha llegado a la app Calculadora del iPhone (y el iPad) en iOS y iPadOS 18",
                    "description": "Hace un mes que iOS 18 está disponible para todos. Esta versión llegó con interesantes novedades de personalización, así como actualizaciones en las apps nativas que han añadido funciones de gran utilidad, como la Calculadora. La app de Calculadora no solo ha…",
                    "url": "https://www.lavanguardia.com/andro4all/apple/todo-lo-que-ha-llegado-a-la-app-calculadora-del-iphone-y-el-ipad-en-ios-y-ipados-18",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/10/novedades-app-calculadora.jpeg?width=1200",
                    "publishedAt": "2024-10-26T16:31:32Z",
                    "content": "Estas son todas las novedades de la app Calculadora en iOS 18 y iPadOS 18\r\nHace un mes que iOS 18 está disponible para todos. Esta versión llegó con interesantes novedades de personalización, así com… [+4424 chars]"
                },
                {
                    "source": { "id": null, "name": "Nextpit.de" },
                    "author": "Edwin Kee",
                    "title": "Wirklich wahr: Diese iOS- und Android-Apps sind nur kurze Zeit kostenlos",
                    "description": "Schaut Euch diese zeitlich begrenzten Angebote für kostenlose Apps und Spiele im Apple App Store und Google Play Store an.",
                    "url": "https://www.nextpit.de/kostenlose-apps-2024-02-43",
                    "urlToImage": "https://fs.npstatic.com/userfiles/1799474/file/Free_Apps_Week-Defense_Legend_5_Pro.jpg",
                    "publishedAt": "2024-10-26T08:00:00Z",
                    "content": "Bitte beachtet, dass sich die Apps in dieser Sammlung von unseren wöchentlich veröffentlichten Empfehlungen für die \"Top 5 Apps der Woche\" unterscheiden. Wir haben hier nicht jede App einzeln geprüft… [+4111 chars]"
                },
                {
                    "source": { "id": null, "name": "Tomshw.it" },
                    "author": "Andrea Pellicane",
                    "title": "Prezzo in CADUTA LIBERA per il MacBook Air M2 da 512GB: il migliore è ora al MINIMO STORICO!",
                    "description": "Se siete alla ricerca di un laptop che rappresenti il perfetto equilibrio tra potenza e portabilità, questa offerta su Amazon potrebbe essere ciò che fa per voi. Il MacBook Air M2 &egrav...",
                    "url": "https://www.tomshw.it/hardware/prezzo-in-caduta-libera-per-il-macbook-air-m2-da-512gb-il-migliore-ora-al-minimo-storico-Wmw",
                    "urlToImage": "https://www.tomshw.it/storage/media/2024/10/39087/macbook-air-m2-offerta-26102024-copertina.jpg",
                    "publishedAt": "2024-10-26T14:13:49Z",
                    "content": "Se siete alla ricerca di un laptop che rappresenti il perfetto equilibrio tra potenza e portabilità, questa offerta su Amazon potrebbe essere ciò che fa per voi. Il MacBook Air M2 è ora disponibile a… [+1676 chars]"
                },
                {
                    "source": { "id": null, "name": "Nextpit.de" },
                    "author": "Jade Bryan",
                    "title": "TSMC mischt sich ein! Werden die Probleme der Google-Tensor-Chips gelöst?",
                    "description": "Einem neuen Bericht zufolge verwendet Googles Tensor G5-Chipsatz, der das Pixel 10 (Pro) antreiben könnte, den effizienteren Prozessknoten von TSMC.",
                    "url": "https://www.nextpit.de/koennte-der-neue-pixel-prozessor-vom-iphone-chip-inspiriert-sein",
                    "urlToImage": "https://fs.npstatic.com/userfiles/7687254/image/Google_Pixel_9_Pro/nextpit_Google_Pixel_9_Pro_Back.jpg",
                    "publishedAt": "2024-10-26T06:00:01Z",
                    "content": "Derzeit stellt Samsungs LSI-Abteilung die Tensor G-Chipsätze her, darunter den Tensor G4, der in der Pixel 9-Serie zum Einsatz kommt. Dieser neue Chip bietet zwar Verbesserungen gegenüber den vorheri… [+1818 chars]"
                },
                {
                    "source": { "id": null, "name": "TalkAndroid" },
                    "author": "Irene Okpanachi",
                    "title": "How To Transfer Files From Android to macOS",
                    "description": "I enjoy mixing Android and MacBook. File transfers can be tricky, but I manage just fine with these easy tricks.",
                    "url": "https://www.talkandroid.com/492709-transfer-android-to-mac/",
                    "urlToImage": "https://www.talkandroid.com/wp-content/uploads/2020/08/apple_macbook_pro_13_TA_0001-1267x950.jpg",
                    "publishedAt": "2024-10-26T13:32:59Z",
                    "content": "I use an Android phone and a MacBook laptop, much to the dismay of my Apple-inclined friends. While the ongoing war between iPhone and Android users continues, Ive found that this pairing gives me th… [+7928 chars]"
                },
                {
                    "source": { "id": "marca", "name": "Marca" },
                    "author": "marca.com",
                    "title": "El afilador de cuchillos que arrasa en Amazon y otros 30 chollos con hasta el 88% de descuento",
                    "description": "Queda muy poco para acabar octubre, un mes que marca la llegada de noviembre con el Black Friday y la Navidad en diciembre. Pero eso no significa que no podamos disfrutar muchas of",
                    "url": "https://www.marca.com/regalos-promociones/2024/10/26/671bb4f746163f04078b457d.html",
                    "urlToImage": "https://phantom-marca.unidadeditorial.es/3d09fc49d64047f33c6ae0e2800f5aa1/resize/1200/f/webp/assets/multimedia/imagenes/2024/10/25/17298685088369.jpg",
                    "publishedAt": "2024-10-26T08:05:17Z",
                    "content": "Queda muy poco para acabar octubre, un mes que marca la llegada de noviembre con el Black Friday y la Navidad en diciembre. Pero eso no significa que no podamos disfrutar muchas ofertas y descuentos.… [+16537 chars]"
                },
                {
                    "source": { "id": "focus", "name": "Focus" },
                    "author": "mit dpa",
                    "title": "Marktausblick - Apple-Zahlen und nahende US-Präsidentschaftswahl bestimmen Börsen in der neuen Woche",
                    "description": "In der neuen Woche läuft die Berichtssaison der Unternehmen auf vollen Touren. Dies gilt für Deutschland und auch die USA. Daneben gerät die US-Präsidentschaftswahl am 5. November immer stärker in den Blick.",
                    "url": "https://www.focus.de/finanzen/boerse/marktprognose-apple-zahlen-und-nahende-us-praesidentschaftswahl-bestimmen-boersen-in-der-neuen-woche_id_260427302.html",
                    "urlToImage": "https://p6.focus.de/img/fotos/id_260427301/gettyimages-509522528.jpg?im=Crop%3D%280%2C64%2C1024%2C512%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=e9818bae93418917b92e9f1def3486f81a568a026e6313adb251042500524092",
                    "publishedAt": "2024-10-26T11:58:13Z",
                    "content": "In der neuen Woche läuft die Berichtssaison der Unternehmen auf vollen Touren. Dies gilt für Deutschland und auch die USA. Daneben gerät die US-Präsidentschaftswahl am 5. November immer stärker in de… [+3257 chars]"
                },
                {
                    "source": { "id": null, "name": "Fstoppers" },
                    "author": "Alex Coleman",
                    "title": "Mobile Creators Rejoice: Lexar’s Go Portable SSD Can Save You Money",
                    "description": "If you’re creating content on your iPhone, Apple’s storage pricing can make it very difficult to justify using storage-heavy workflows like ProRes. Lexar’s Go Portable SSD, however, is specially designed to be the perfect external storage pairing for iPhones …",
                    "url": "https://fstoppers.com/video/mobile-creators-rejoice-lexars-go-portable-ssd-can-save-money-683293",
                    "urlToImage": "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2024/10/lexar_review-2.jpg",
                    "publishedAt": "2024-10-26T16:03:01Z",
                    "content": "If youre creating content on your iPhone, Apples storage pricing can make it very difficult to justify using storage-heavy workflows like ProRes. Lexars Go Portable SSD, however, is specially designe… [+4252 chars]"
                },
                {
                    "source": { "id": null, "name": "Techbang.com" },
                    "author": "August",
                    "title": "繼10月30日發表三顆鏡頭，傳聞Canon在不久後還會推出兩款新鏡頭？",
                    "description": "國外媒體聲稱，Canon在10/30發表三顆鏡頭後，不久將來還會再推出兩顆新鏡頭，其中一顆很有可能是RF-S 7.8mm F4 STM DUAL，另一顆不確定是不是RF 200-500mm F4L。國外媒體聲稱，Canon在10/30發表三顆鏡頭後，不久將來還會再推出兩顆新鏡頭，其中一顆很有可能是RF-S 7.8mm F4 STM DUAL，另一顆不確定是不是RF 200-500mm F4L。\n會是VR鏡頭和超望遠變焦鏡？\n最近關於Canon的爆料連連，除了10/30會發表RF 70-200mm F2.8L IS…",
                    "url": "https://www.techbang.com/posts/119122-following-the-release-of-three-lenses-on-october-30-canon-is",
                    "urlToImage": "https://cdn0.techbang.com/system/excerpt_images/119122/original/2848b6a3d893084703bb1edb8bcc5eab.jpg?1729737903",
                    "publishedAt": "2024-10-26T08:00:00Z",
                    "content": "Canon10/30RF-S 7.8mm F4 STM DUALRF 200-500mm F4L\r\nCanon10/30RF 70-200mm F2.8L IS USM ZRF 24mm f/1.4L VCMRF 50mm f/1.4L VCMEOS R6 Mark IIICanon10/30RF-S 7.8mm F4 STM DUALRF 200-500mm F4L\r\nRF-S 7.8mm F… [+132 chars]"
                },
                {
                    "source": { "id": null, "name": "Gizmodo.com" },
                    "author": "Thomas Handley",
                    "title": "Los AirPods Pro 2 traen una función revolucionaria: ahora también serán audífonos",
                    "description": "Apple planea convertir los AirPods Pro 2 en audífonos de venta libre, iniciando en Estados Unidos y Canadá, en una nueva función con enfoque en la salud auditiva. Este cambio permite a Apple avanzar en el uso de tecnología para mejorar la vida cotidiana, sigu…",
                    "url": "https://es.gizmodo.com/los-airpods-pro-2-traen-una-funcion-revolucionaria-ahora-tambien-seran-audifonos-2000132838",
                    "urlToImage": "https://es.gizmodo.com/app/uploads/2024/10/Airpods.jpg",
                    "publishedAt": "2024-10-26T15:42:08Z",
                    "content": "AirPods Pro 2: ahora también como audífonos con grado clínico\r\nApple ha anunciado una actualización que convertirá a los AirPods Pro 2 en audífonos de venta libre, aprovechando sus micrófonos para me… [+1192 chars]"
                },
                {
                    "source": { "id": null, "name": "Gizmodo.com" },
                    "author": "Thomas Handley",
                    "title": "El cambio en la estrategia de Apple con Vision Pro revela su próximo gran movimiento",
                    "description": "Apple ha decidido reducir la producción de su Vision Pro, pero lejos de significar un retroceso, es parte de una estrategia clara y planeada. ¿Por qué este ajuste y qué nos depara? Explora cómo este movimiento encaja en la visión de futuro de Apple y cómo los…",
                    "url": "https://es.gizmodo.com/el-cambio-en-la-estrategia-de-apple-con-vision-pro-revela-su-proximo-gran-movimiento-2000132808",
                    "urlToImage": "https://es.gizmodo.com/app/uploads/2024/10/Apple-Vision.jpg",
                    "publishedAt": "2024-10-26T14:02:24Z",
                    "content": "Ajuste de producción: una estrategia a largo plazo para Apple Vision Pro\r\nDesde el lanzamiento de Vision Pro, el dispositivo ha sido centro de debates sobre sus ventas y futuro. Recientes informes ap… [+2781 chars]"
                },
                {
                    "source": { "id": null, "name": "Gizmodo.com" },
                    "author": "Thomas Handley",
                    "title": "Lo que no te han contado sobre el costo de dejar el cargador del iPhone enchufado",
                    "description": "¿Sabías que dejar el cargador del iPhone enchufado puede tener un impacto en tu factura de luz, aunque sea mínimo? En este artículo, te contamos lo que realmente gasta en \"stand-by\" y cómo su consumo se compara con otros dispositivos. ¿Vale la pena preocupars…",
                    "url": "https://es.gizmodo.com/lo-que-no-te-han-contado-sobre-el-costo-de-dejar-el-cargador-del-iphone-enchufado-2000132803",
                    "urlToImage": "https://es.gizmodo.com/app/uploads/2024/10/Cargador.jpg",
                    "publishedAt": "2024-10-26T13:53:08Z",
                    "content": "¿Es tan grave dejar el cargador enchufado sin el iPhone?\r\n¿Cuántas veces dejas el cargador de tu iPhone conectado incluso cuando no estás cargando el dispositivo? Para muchos, es una práctica cotidia… [+2737 chars]"
                },
                {
                    "source": { "id": "ign", "name": "IGN" },
                    "author": "Jacob Kienlen",
                    "title": "Amazon Black Friday 2024: When Will the Sale Start This Year?",
                    "description": "Here's what we know.",
                    "url": "https://www.ign.com/articles/amazon-black-friday-2024-when-will-the-sale-start-this-year",
                    "urlToImage": "https://assets-prd.ignimgs.com/2022/11/25/black-friday-deals-live-at-amazon-new-2022-1669373919156.png?width=1280",
                    "publishedAt": "2024-10-26T00:15:11Z",
                    "content": "It's still October and Amazon just wrapped up its fall Prime Day sale earlier this month, but it's never to early too start looking ahead toward Black Friday deals. Amazon offers one of the largest B… [+9541 chars]"
                },
                {
                    "source": { "id": "techradar", "name": "TechRadar" },
                    "author": "hamish.hector@futurenet.com (Hamish Hector)",
                    "title": "ICYMI: the week's 7 biggest tech stories from Apple's M4 Mac teaser to Alien Romulus releasing on VHS in 2024",
                    "description": "ICYMI here's the biggest tech news stories from Apple, Samsung, Garmin, and more for October 26, 2024.",
                    "url": "https://www.techradar.com/tech/icymi-the-weeks-7-biggest-tech-stories-from-apples-m4-mac-teaser-to-alien-romulus-releasing-on-vhs-in-2024",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/K3rQEyxGRHj4dGoNZPjskP-1200-80.jpg",
                    "publishedAt": "2024-10-26T07:00:10Z",
                    "content": "Things are getting spooky round TechRadar way as we kicked off our Halloween Week event, but that hasn't scared off these major announcements from the world of tech.\r\nIn fact far from it. After all, … [+6177 chars]"
                },
                {
                    "source": { "id": "techradar", "name": "TechRadar" },
                    "author": "mark.wilson@futurenet.com (Mark Wilson)",
                    "title": "iPad mini 7 review roundup: should you buy Apple's mini tablet?",
                    "description": "The internet's verdict on the iPad mini 7 is in. Should you buy one? We've gathered all of the biggest reviews in one place to help you decide.",
                    "url": "https://www.techradar.com/tablets/ipad-mini/ipad-mini-7-review-roundup-should-you-buy-apples-mini-tablet",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/s7sKtP3MiDuTqXhDGe7bEa-1200-80.jpg",
                    "publishedAt": "2024-10-26T10:00:00Z",
                    "content": "The internet was flooded with iPad mini 7 reviews this week after Apple's quiet announcement of the mini tablet on October 15. Given it's been three years since we last saw Apple launch an 8.3-inch i… [+6867 chars]"
                },
                {
                    "source": { "id": "techradar", "name": "TechRadar" },
                    "author": "Roland Moore-Colyer",
                    "title": "I’m torn on the iPhones 16’s Camera Control – it’s handy but unfinished",
                    "description": "The Camera Control on Apple’s iPhone 16 is cool but incomplete.",
                    "url": "https://www.techradar.com/phones/iphone/im-torn-on-the-iphones-16s-camera-control-its-handy-but-unfinished",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/rqeKbWFyYzsbsmxZSYGXdn-1200-80.jpg",
                    "publishedAt": "2024-10-26T07:30:00Z",
                    "content": "If you’ve read my previous thoughts on iPhones here at TechRadar and its sibling site Tom's Guide, you’ll know I have fairly firm opinions on Apple’s smartphones.\r\nSince moving from Android to iPhone… [+3312 chars]"
                },
                {
                    "source": { "id": null, "name": "Numerama" },
                    "author": "Matthieu Fabris",
                    "title": "Canal+ lance une vente flash à moins de 20 € par mois, avec Apple TV+ et beIN SPORTS",
                    "description": "Canal+ propose un abonnement qui inclut plusieurs services de streaming et la chaîne beIN Sports, pour un prix très compétitif. De qui occuper les longues soirées d'hiver qui s'annoncent. C’est quoi, cette offre de Canal+ ? Disponible jusqu'au 28 octobre 2024…",
                    "url": "https://www.numerama.com/pop-culture/1832090-canal-lance-une-vente-flash-a-moins-de-20-e-par-mois-avec-apple-tv-et-bein-sports.html",
                    "urlToImage": "https://www.numerama.com/wp-content/uploads/2024/10/canal-beinsports.jpg",
                    "publishedAt": "2024-10-26T11:37:55Z",
                    "content": "[Deal du jour] Canal+ propose un abonnement qui inclut plusieurs services de streaming et la chaîne beIN Sports, pour un prix très compétitif. De qui occuper les longues soirées d’hiver qui s’annonce… [+1725 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
                    "title": "Apple Unveils ‘Groundbreaking’ iPhone Update—A Serious New Problem For Samsung",
                    "description": "Apple has changed the game—how does Samsung ever compete with this?",
                    "url": "https://www.forbes.com/sites/zakdoffman/2024/10/26/apples-ios-182-and-iphone-16-pro-vs-samsung-galaxy-ai-s25-ultra-and-android-15/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/671cc1241eecaf869122b327/0x0.jpg?format=jpg&crop=2234,1434,x514,y282,safe&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T11:26:26Z",
                    "content": "Apple iPhone versus Samsung Galaxy suddenly gets more interesting\r\ndpa/picture alliance via Getty Images\r\nUpdated on October 26 with new reports into release of Googles Gemini 2.0.\r\nTheres a new divi… [+7579 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "John Werner, Contributor, \n John Werner, Contributor\n https://www.forbes.com/sites/johnwerner/",
                    "title": "3 Big Differences – Nvidia Is Poised To Take Over From Apple",
                    "description": "The rise of Nvidia against Apple shows how artificial intelligence continues to claim bigger pieces of the tech market.",
                    "url": "https://www.forbes.com/sites/johnwerner/2024/10/26/3-big-differences--nvidia-is-poised-to-take-over-from-apple/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6712953a7342c1f14da300fc/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T21:03:08Z",
                    "content": "Microchip and Nvidia logo displayed on a phone screen are seen in this multiple exposure ... [+] illustration photo taken in Krakow, Poland on April 10, 2023. (Photo by Jakub Porzycki/NurPhoto via Ge… [+3500 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "Erik Kain, Senior Contributor, \n Erik Kain, Senior Contributor\n https://www.forbes.com/sites/erikkain/",
                    "title": "What To Watch This Weekend: New Streaming TV Shows And Movies On Netflix, Prime Video, Hulu, Apple TV, Disney+ And More",
                    "description": "Here's everything new to watch on all your favorite streaming services, from Netflix to Hulu to Apple TV and more.",
                    "url": "https://www.forbes.com/sites/erikkain/2024/10/25/what-to-watch-this-weekend-new-streaming-tv-shows-and-movies-on-netflix-prime-video-hulu-apple-tv-disney-and-more/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/671c251cc72ec00b10a70549/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T00:16:56Z",
                    "content": "What to watch this weekend.\r\nCredit: Netflix / Apple\r\nAnother weekend is upon us and as the days and nights get chillier, the need for great streaming options becomes more pressing. Thankfully, there… [+9543 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "Ewan Spence, Senior Contributor, \n Ewan Spence, Senior Contributor\n https://www.forbes.com/sites/ewanspence/",
                    "title": "MacBook Pro Release Date Latest: Apple’s Ambitious Plans",
                    "description": "As the Apple community prepares to welcome the new MacBook Pro laptops, what do Tim Cook and his team have planned?",
                    "url": "https://www.forbes.com/sites/ewanspence/2024/10/26/macbook-pro-release-date-latest-apples-ambitious-plans/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/648494c39310479072750fc7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T16:04:06Z",
                    "content": "Apple CEO Tim Cook holds the new 15-inch MacBook Air during the Apple Worldwide Developers ... [+] Conference on June 05, 2023 (Photo by Justin Sullivan/Getty Images)\r\nGetty Images\r\nWhile Apples iPho… [+5329 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "Simon Thompson, Contributor, \n Simon Thompson, Contributor\n https://www.forbes.com/sites/simonthompson/",
                    "title": "Billy Crystal Talks ‘Before’ And Teases A Return To Stand-Up Comedy",
                    "description": "Swapping comedy for drama, Billy Crystal was so into pushing the envelope with the darker elements of his new Apple TV+ show that he was asked to \"take a breath.\"",
                    "url": "https://www.forbes.com/sites/simonthompson/2024/10/26/billy-crystal-talks-before-and-teases-a-return-to-stand-up-comedy/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/671d1d58958e771710a6d76a/0x0.jpg?format=jpg&crop=3500,1969,x0,y1175,safe&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T19:36:50Z",
                    "content": "The poster for 'Before' illustrates how layered the limited series has.\r\nApple TV+\r\nBilly Crystal was so into the darker and more gruesome elements of Before that his co-creatives needed him to take … [+6295 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
                    "title": "iPhone 17 Pro Max Design Upgrade: New Look Predicted In Latest Leak",
                    "description": "The next iPhone will have a new look on the Pro Max version, according to a new report.",
                    "url": "https://www.forbes.com/sites/davidphelan/2024/10/26/iphone-17-pro-max-design-upgrade-new-look-predicted-in-latest-leak/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/671aac8f66867a9d98b75d26/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T11:21:31Z",
                    "content": "Updated Oct. 26 with details of how the iPhone display technology could change the iPhones design in another way.\r\nNext September, the iPhone will look noticeably different, if a new report is right.… [+3490 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "Edward Segal, Senior Contributor, \n Edward Segal, Senior Contributor\n https://www.forbes.com/sites/edwardsegal/",
                    "title": "How And Why The Ads Of 4 Companies Created Controversies",
                    "description": "Companies that send the wrong message in their ads can generate negative publicity for themselves and create controversies about the brands they promote.",
                    "url": "https://www.forbes.com/sites/edwardsegal/2024/10/26/how-and-why-the-ads-of-4-companies-created-controversies/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/61069d76217446fba541bc1c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T16:49:24Z",
                    "content": "Getting attention for a companys products is importantbut so is sending the right message about ... [+] the products and why people should buy them. Companies that send the wrong message risk generat… [+6340 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "Daniel Newman, Contributor, \n Daniel Newman, Contributor\n https://www.forbes.com/sites/danielnewman/",
                    "title": "Does The Rise Of AI Agents Signal The End Of The App Economy?",
                    "description": "The app economy is quickly coming to an end as AI powered agents take over the app experience and remove the need for so many apps focusing more on simplicity.",
                    "url": "https://www.forbes.com/sites/danielnewman/2024/10/25/does-the-rise-of-ai-agents-signal-the-end-of-the-app-economy/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/671c0a77974f367f7db6b535/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T00:35:40Z",
                    "content": "App Store icon displayed on a phone screen is seen in this illustration photo taken in Krakow, ... [+] Poland on July 18, 2021. (Photo Ilustration by Jakub Porzycki/NurPhoto via Getty Images)\r\nNurPho… [+4945 chars]"
                },
                {
                    "source": { "id": null, "name": "Forbes" },
                    "author": "Mark Sparrow, Senior Contributor, \n Mark Sparrow, Senior Contributor\n https://www.forbes.com/sites/marksparrow/",
                    "title": "Orico Data Matrix Hybrid Storage For Macs Tried And Tested",
                    "description": "An alternative to this conundrum could be a hybrid solution with hot storage on a fast SSD for your current projects and cold storage on slower hard drives for your ar...",
                    "url": "https://www.forbes.com/sites/marksparrow/2024/10/26/orico-data-matrix-hybrid-storage-for-macs-tried-and-tested/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66f3d62c4ae7498226742770/0x0.jpg?format=jpg&crop=1882,877,x0,y132,safe&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-10-26T11:00:00Z",
                    "content": "The Orico DMM Series matches the look of Apple Macs beautifully. The hybrid storage option is ... [+] available in Elite, Pro and Ultra configurations.\r\nOrico\r\nAre you a freelance photographer, conte… [+6630 chars]"
                },
                {
                    "source": { "id": null, "name": "Tom's Hardware UK" },
                    "author": "Anton Shilov",
                    "title": "Former Intel directors believe Intel must split in two to survive",
                    "description": "Former Intel directors called the government to use its $20 billion CHIPS funding to force the company to split into two.",
                    "url": "https://www.tomshardware.com/tech-industry/former-intel-directors-believe-intel-must-split-in-two-to-survive",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/nHgDDyR8KZuRfXaU7cJgYb-1200-80.jpg",
                    "publishedAt": "2024-10-26T13:11:24Z",
                    "content": "Four former members of Intel's board of directors believe that the company should spin off its manufacturing operations and assert that this is the only way for Intel to survive. They wrote in a colu… [+5701 chars]"
                },
                {
                    "source": { "id": null, "name": "Hdblog.it" },
                    "author": "HDblog.it",
                    "title": "iPad mini 7, ecco i \"nuovi\" sfondi | Download",
                    "description": "Potete scaricarli da qui",
                    "url": "https://www.hdblog.it/tablet/articoli/n597389/ipad-mini-7-sfondi-download/",
                    "urlToImage": "https://hd2.tudocdn.net/1200560?w=1920",
                    "publishedAt": "2024-10-26T07:00:00Z",
                    "content": "Apple ha da poco annunciato una nuova generazione di iPad mini equipaggiati con il chip A17 Pro in vista di Apple Intelligence (qui per approfondire).\r\niPad mini 7 non rappresenta una grossa novità, … [+734 chars]"
                },
                {
                    "source": { "id": null, "name": "Hdblog.it" },
                    "author": "HDblog.it",
                    "title": "Google si prepara al lancio di Gemini 2.0: la sfida a OpenAI entra nel vivo",
                    "description": "Un'importante accelerazione nella strategia di Google",
                    "url": "https://www.hdblog.it/google/articoli/n597416/google-lancio-gemini20-dicembre-sfida-openai/",
                    "urlToImage": "https://hd2.tudocdn.net/1197144?w=1920",
                    "publishedAt": "2024-10-26T08:00:00Z",
                    "content": "Mentre circolano voci discordanti sul possibile di un nuovo modello AI da parte di OpenAI entro fine anno, Google potrebbe rivelarsi più concreta preparandosi a lanciare Gemini 2.0 il prossimo dicemb… [+2018 chars]"
                },
                {
                    "source": { "id": null, "name": "Antyweb.pl" },
                    "author": "Piotr Kurek",
                    "title": "Twój iPhone wkrótce będzie zupełnie inny. Podziękuj Unii",
                    "description": "Apple szykuje się do wprowadzenia kolejnych zmian w systemie iOS podyktowanych nowymi przepisami Unii Europejskiej. To efekt obowiązujących dyrektyw DSA i DMA.",
                    "url": "https://antyweb.pl/twoj-iphone-wkrotce-bedzie-zupelnie-inny-podziekuj-unii",
                    "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2024/09/afzvyarncd/iphone-16-3.jpeg",
                    "publishedAt": "2024-10-26T10:00:57Z",
                    "content": "Najwaniejsz zmian wynikajc z wprowadzenia w ycie Aktu o rynkach cyfrowych (DMA) dla Apple by fakt, e firma zmuszona zostaa do otwarcia si na zewntrze sklepy z aplikacjami, z których bd mogli korzysta… [+2864 chars]"
                },
                {
                    "source": { "id": null, "name": "Antyweb.pl" },
                    "author": "Kamil Pieczonka",
                    "title": "Czekacie na nowe procesory Google? No to możecie już przestać",
                    "description": "To już chyba tradycja, że Google nie chroni zbyt mocno informacji na temat swoich smartfonów Pixel. Przecieki o nowych modelach pojawiają się pół roku przed premierą, a teraz poznaliśmy nawet specyfikację procesorów, w tym Tensora G6, który ma debiutować z Pi…",
                    "url": "https://antyweb.pl/czekacie-na-nowe-procesory-google-no-to-mozecie-juz-przestac",
                    "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2024/08/nk1vykxeoa/ggl-pixel-9-vs-9-pro-3.jpg",
                    "publishedAt": "2024-10-26T11:30:12Z",
                    "content": "Google studzi entuzjazm fanów Pixela\r\nJeszcze na dugo przed premier smartfonów z rodziny Pixel 9 wiedzielimy, e bd to ostatnie modele z procesorem Tensor, który projektowany jest na bazie ukadu Exyno… [+4022 chars]"
                },
                {
                    "source": { "id": null, "name": "Toyokeizai.net" },
                    "author": "本田 雅一",
                    "title": "競合ひしめく｢XRデバイス｣に挑戦するパナの勝算 アップル､Metaが\"目指さない\"産業特化型で参入 | インターネット | 東洋経済オンライン",
                    "description": "VRヘッドセット「MeganeX superlight 8K」は、Apple Vision Proを超える高画質で、本体185gという軽さが話題となっている。この製品のハードウェア設計と生産を行うのはパナソニックグループ。商品開発はパナソニ…",
                    "url": "https://toyokeizai.net/articles/-/835078",
                    "urlToImage": "https://tk.ismcdn.jp/mwimgs/5/6/1200w/img_56dc5d6f2a2765835d81c4da8107edc6377065.jpg",
                    "publishedAt": "2024-10-26T20:20:00Z",
                    "content": "VRMeganeX superlight 8KApple Vision Pro185g\r\nShiftallShiftall\r\n249900MRVRApple Vision Pro\r\n4K3552x3840OLED7104x38402727OLED18BOE10\r\nApple Vision Pro41202512\r\nXRVRARMRMeta Platforms"
                },
                {
                    "source": { "id": null, "name": "Slate Magazine" },
                    "author": "Emily Peck, Anna Szymanski, and Elizabeth Spiers",
                    "title": "Elon Musk’s Million-Dollar Sweepstakes to Motivate Trump Voters",
                    "description": "The many schemes of super PACs. Are they legal?",
                    "url": "https://slate.com/podcasts/slate-money/2024/10/election-elon-musk-million-dollar-sweepstakes-trump-voters-legal-gambling-campaign-donations-paycheck",
                    "urlToImage": "https://compote.slate.com/images/0ad4cce0-1643-405e-b092-a65cc2f24b9e.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
                    "publishedAt": "2024-10-26T13:00:00Z",
                    "content": "This week: How do you buy an election? Throw a sweepstakes! Emily Peck, Elizabeth Spiers, and Rueters Anna Szymanski (filling in for Felix Salmon) discuss Elon Musks scheme to get potential Trump vot… [+1054 chars]"
                },
                {
                    "source": { "id": null, "name": "iLounge" },
                    "author": "Samantha Wiley",
                    "title": "Awesome Sales on Apple Products this Week",
                    "description": "Discounts on Apple products can be found all over Amazon featuring the Apple Pencil Pro, AirTags, MagSafe charger, and Magic Keyboard.  Apple Pencil Pro: The Apple Pencil Pro is available now for $94.99 from $129, nearing the All-time low record price for the…",
                    "url": "https://www.ilounge.com/news/awesome-sales-on-apple-products-this-week",
                    "urlToImage": "https://www.ilounge.com/wp-content/uploads/2024/10/Apple-4.png",
                    "publishedAt": "2024-10-26T17:49:57Z",
                    "content": "Discounts on Apple products can be found all over Amazon featuring the Apple Pencil Pro, AirTags, MagSafe charger, and Magic Keyboard. \r\nApple Pencil Pro: The Apple Pencil Pro is available now for $9… [+736 chars]"
                },
                {
                    "source": { "id": null, "name": "iLounge" },
                    "author": "Samantha Wiley",
                    "title": "Disney+ and Hulu cease supporting sign up and payments on the App Store",
                    "description": "Disney+ customers can no longer sign up to buy subscriptions for Disney+ or Hulu on the Apple App Store. This change cuts out subscription fees that Disney needs to pay for utilizing Apple’s in-app purchases. Subscribers noticed this and was written down on R…",
                    "url": "https://www.ilounge.com/news/disney-and-hulu-cease-supporting-sign-up-and-payments-on-the-app-store",
                    "urlToImage": "https://www.ilounge.com/wp-content/uploads/2024/10/Disney-and-Hulu.png",
                    "publishedAt": "2024-10-26T17:48:07Z",
                    "content": "Disney+ customers can no longer sign up to buy subscriptions for Disney+ or Hulu on the Apple App Store. This change cuts out subscription fees that Disney needs to pay for utilizing Apple’s in-app p… [+716 chars]"
                },
                {
                    "source": { "id": null, "name": "iLounge" },
                    "author": "Samantha Wiley",
                    "title": "iPad Mini 7 awaits an update out of the box on day of release",
                    "description": "The iPad Mini 7 was launched on Wednesday with an update waiting right after taking it out of its packaging, with the latest version being iOS 18.0.1. The update includes security updates and major bug fixes, so updating right after purchasing the iPad mini 7…",
                    "url": "https://www.ilounge.com/news/ipad/ipad-mini-7-awaits-an-update-out-of-the-box-on-day-of-release",
                    "urlToImage": "https://www.ilounge.com/wp-content/uploads/2024/10/iPad-Mini-7-2.png",
                    "publishedAt": "2024-10-26T17:44:29Z",
                    "content": "The iPad Mini 7 was launched on Wednesday with an update waiting right after taking it out of its packaging, with the latest version being iOS 18.0.1.\r\nThe update includes security updates and major … [+666 chars]"
                },
                {
                    "source": { "id": null, "name": "Olhardigital.com.br" },
                    "author": "Pedro Spadoni",
                    "title": "Passou a Apple! Nvidia se torna empresa mais valiosa do mundo",
                    "description": "Nvidia atingiu um valor de mercado de US$ 3,53 trilhões, o que superou a capitalização de US$ 3,52 trilhões da Apple\nO post Passou a Apple! Nvidia se torna empresa mais valiosa do mundo apareceu primeiro em Olhar Digital.",
                    "url": "https://olhardigital.com.br/2024/10/26/pro/nvidia-passa-apple-e-se-torna-empresa-mais-valiosa-do-mundo/",
                    "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2024/10/Destaque-Acoes-Nvidia-scaled-1.jpg",
                    "publishedAt": "2024-10-26T16:03:00Z",
                    "content": "A Nvidia ultrapassou a Apple como a empresa mais valiosa do mundo. A companhia atingiu um valor de mercado de US$ 3,53 trilhões (R$ 20,15 trilhões) na sexta-feira (25), o que superou a capitalização … [+1867 chars]"
                },
                {
                    "source": { "id": null, "name": "Olhardigital.com.br" },
                    "author": "Pedro Spadoni",
                    "title": "ChatGPT deixa Siri mais útil e inteligente? Confira as primeiras impressões",
                    "description": "A repórter Allison Johnson, do The Verge, testou a Siri com ChatGPT e conta o que achou da integração; confira os destaques\nO post ChatGPT deixa Siri mais útil e inteligente? Confira as primeiras impressões apareceu primeiro em Olhar Digital.",
                    "url": "https://olhardigital.com.br/2024/10/26/reviews/confira-as-primeiras-impressoes-sobre-a-nova-siri-com-chatgpt/",
                    "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2024/09/Apple-Intelligence-Siri-iPhone-16-scaled.jpg",
                    "publishedAt": "2024-10-26T20:56:35Z",
                    "content": "A Siri, assistente virtual da Apple, vai usar o ChatGPT para responder solicitações de usuários a partir do iOS 18.2. Ainda vai levar algum tempo para essa versão chegar ao público, mas ela já está d… [+3840 chars]"
                },
                {
                    "source": { "id": null, "name": "Olhardigital.com.br" },
                    "author": "Pedro Spadoni",
                    "title": "Android 16 pode ter notificações estilo iPhone; veja (e entenda)",
                    "description": "O Android 16 pode trazer uma novidade que mudaria como os usuários lidam com notificações em seus celulares; entenda\nO post Android 16 pode ter notificações estilo iPhone; veja (e entenda) apareceu primeiro em Olhar Digital.",
                    "url": "https://olhardigital.com.br/2024/10/26/pro/android-16-pode-ter-notificacoes-estilo-iphone-veja-e-entenda/",
                    "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2024/10/Destaque-Andrioid-novo-tipo-de-notificacao-scaled.jpg",
                    "publishedAt": "2024-10-26T21:46:51Z",
                    "content": "O Android 16 pode trazer uma novidade que mudaria como os usuários lidam com notificações em seus celulares. Chamado de Rich Ongoing Notifications, esse novo recurso permitirá que desenvolvedores cri… [+1935 chars]"
                },
                {
                    "source": { "id": null, "name": "Olhardigital.com.br" },
                    "author": "Kelvin Leão Nunes da Costa",
                    "title": "Como cancelar o Amazon Music Unlimited",
                    "description": "Quer cancelar sua assinatura do Amazon Music Unlimited? Veja o passo a passo de como encerrar seu plano e evitar cobranças futuras\nO post Como cancelar o Amazon Music Unlimited apareceu primeiro em Olhar Digital.",
                    "url": "https://olhardigital.com.br/2024/10/26/dicas-e-tutoriais/como-cancelar-o-amazon-music-unlimited/",
                    "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2024/10/6-4-scaled.jpg",
                    "publishedAt": "2024-10-26T07:20:00Z",
                    "content": "O Amazon Music Unlimited é o serviço de streaming de música oferecido pela Amazon, que permite aos usuários acesso ilimitado a um vasto catálogo de músicas, playlists e podcasts, semelhante a platafo… [+3398 chars]"
                }
            ],
            loader: false,
            page: 1
        }
    }

    async componentDidMount() {
        let date = new Date();
        let formateTodDate = date.toISOString().split('T')[0];
        let today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formattedYesDate = yesterday.toISOString().split('T')[0];
        // let url = `https://newsapi.org/v2/everything?q=apple&from=${formateTodDate}&to=${formattedYesDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5`;
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}`;

        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({ articles: parseData.articles, loader: true });
        // console.log(parseData.articles);
    }

    render() {
        return (
            <>
                <div className='row'>
                    {
                        this.state.articles.map((articles) => {
                            if ((articles.title != null && articles.title != '[Removed]') && (articles.description != null && articles.description != '[Removed]')) {
                                return <div className='col-md-3 col-sm-2 my-3'>
                                    <NewsItem source={articles.source} author={articles.author} title={articles.title} description={articles.description} url={articles.url} urlToImage={articles.urlToImage} publishedAt={articles.publishedAt} content={articles.content} />
                                </div>
                            }
                        }
                        )
                    }
                    <div className='container border'>
                        <div className='float-end'>
                            <button className='btn btn-success'>Previous</button>
                            <button className='btn btn-success m-3'>Next</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
