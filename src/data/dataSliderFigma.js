import {v4 as uuidv4} from "uuid"

const dataSlider = 
{
    title: "Разработка дизайна в Figma",
    img: "figma",
        content: [
            {
                id: uuidv4(),
                description: "Интерфейс для приложения одежды",
                stack: "Задача состоялась в разработке интерфейса мобильного приложения по подбору одежды по погоде. На данный момент приложение находится в разработке для платформы Android и веб-версии. Моя часть в проекте: генерация идеи, дизайн, составление прототипа, разработка фронтенда.",
                btnContent: [
                    {
                        namebtn: "Просмотр проекта",
                        urlbtn: "https://www.figma.com/design/I46zgPhF1VV6KdZezlBNMS/Untitled?node-id=0-1&t=Lx3wBokw3f1g9bBn-0"
                    }
                    ]
            },
            {
                id: uuidv4(),
                description: "Интерактивное меню",
                stack: "Создание дизайна меню японского ресторана для веб-версии. Сайт предназначен для организации объемного меню ресторана в небольшой области экрана компьютера или телефона без потери наглядности. При нажатии на позицию открывается окно м фотографией и описанием блюда.",
                btnContent: [
                    {
                        namebtn: "Просмотр проекта",
                        urlbtn: "https://www.figma.com/design/I46zgPhF1VV6KdZezlBNMS/Untitled?node-id=0-1&t=ZNCrTLGXR3lCQG1w-0"
                    }
                    ]
            },
            {
                id: uuidv4(),
                description: "Vlab",
                stack: "Разработка дизайна интерфейса для образовательной платформы Vlab. Особенность проекта – наличие собственного эдитора и возможность просмотра и редактирования файлов прямо в данной среде.",
                btnContent: [
                    {
                        namebtn: "Просмотр проекта",
                        urlbtn: "https://www.figma.com/design/HMBvOc4klKDh8A8xci46eA/Untitled?node-id=0-1&t=ZNCrTLGXR3lCQG1w-0"
                    }
                    ]
            }
        ]
}

export default dataSlider