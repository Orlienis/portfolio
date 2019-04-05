import React from "react";

export default class Utils{

    static get COUNTRIES(){
        return ["USA","ESP","ARG","RUS","CHN"];
    }

    static get MENU() {
        return [
            {
                icon: 'fas fa-home text-warning',
                link: '',
                style: '',
                text: 'HOME',
            },
            {
                icon: 'fas fa-rss text-primary',
                link: 'RSS',
                style: '',
                text: 'RSS2sd'
            },
            {
                icon: 'fas fa-pencil-alt text-success',
                link: 'about',
                style: '',
                text: 'ABOUT'
            },
            {
                icon: 'fas fa-cog text-danger',
                link: 'setting',
                style: '',
                text: 'Setting'
            },
            {
                icon: 'fas fa-arrow-up  text-secondary',
                link: 'pages',
                style: '',
                text: 'Pages'
            },
        ]
    }
}