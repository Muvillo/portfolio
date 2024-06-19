import {v4 as uuidv4} from "uuid"

const dataSlider = 
    {
        title: "Разработка сайтов и верстка",
        img: "site",
        content: [
            {
                id: uuidv4(),
                description: "Солнечная система. Разработка сайта, который содержит в себе интерактивную солнечную систему. При наведении на планету появляется ее название, при нажатии – описание. Кнопка «Планеты» выстраивают все планеты в один ряд.",
                stack: "Технологии: html, css, js",
                btnContent: [
                    {
                        namebtn: "Код на Git",
                        urlbtn: "https://github.com/Muvillo/TheSolarSystem"
                    },
                    {
                        namebtn:"Просмотр проекта",
                        urlbtn: "https://muvillo.github.io/TheSolarSystem/"
                    } 
                    ]
            },
            {
                id: uuidv4(),
                description: "Интерактивное меню. Идея заключается в организации объемного меню ресторана в небольшой области экрана компьютера или телефона без потери наглядности. При нажатии на позицию открывается окно м фотографией и описанием блюда.",
                stack: "Технологии: html, css, js", 
                btnContent: [
                    {
                        namebtn: "Код на Git",
                        urlbtn:"https://github.com/Muvillo/InteractiveMenu"
                    },
                    {
                        namebtn: "Просмотр проекта",
                        urlbtn: "https://muvillo.github.io/InteractiveMenu/"
                    }     
                    ]
            },
            {
                id: uuidv4(),
                description: "Пестовский лесокомбинат. Задача состоялась в верстке адаптивной версии сайта. Все анимации выполнены на чистом JS и CSS, данные берутся из массивов внешних файлов, что позволяет сайту работать с API.",
                stack: "Технологии: html, css, js", 
                btnContent: [
                    {
                        namebtn: "Код на Git",
                        urlbtn:"https://github.com/Muvillo/alpha"
                    },
                    {
                        namebtn: "Просмотр проекта",
                        urlbtn: "https://muvillo.github.io/alpha/"
                    }     
                    ]
            },
            {
                id: uuidv4(),
                description: "Авиаперевозки цветов. Верстка бесплатного макета из Figma для отработки навыков.",
                stack: "Технологии: html, css, js", 
                btnContent: [
                    {
                        namebtn: "Код на Git",
                        urlbtn:"https://github.com/Muvillo/air-transportation-of-flowers"
                    },
                    {
                        namebtn: "Просмотр проекта",
                        urlbtn: "https://muvillo.github.io/air-transportation-of-flowers/"
                    }     
                    ]
            },
            {
                id: uuidv4(),
                description: "Aperture Studios. Верстка адаптивного одностраничного сайта для студии фотографа.",
                stack: "Технологии: html, css", 
                btnContent: [
                    {
                        namebtn: "Код на Git",
                        urlbtn:"https://github.com/Muvillo/studio"
                    },
                    {
                        namebtn: "Просмотр проекта",
                        urlbtn: "https://muvillo.github.io/studio/"
                    }     
                    ]
            },
            {
                id: uuidv4(),
                description: "Vlab. Разработка учебно-образовательной платформы для университета. Основная идея заключается в наличии трех рабочих пространств: студент, тьютор и разработчик, где происходит обмен заданиями и готовыми результатами. Особенность проекта – наличие собственного эдитора и возможность просмотра и редактирования файлов прямо в данной среде. Моя часть работы – разработка дизайна, интерфейса, фронта, создание запросов.",
                stack: "Технологии: html, css, ls, Blazor, C#. ", 
                btnContent: []
            }
        ]
    }


export default dataSlider