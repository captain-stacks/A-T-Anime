import React, { useState } from 'react';
import AnimeCard from "../components/AnimeCard"

const AllAnime = () => {
    const [anime] = useState([
        {
            name: "Sono Bisque Doll wa Koi wo Suru",
            description: "High schooler Wakana Gojou cares about one thing: making Hina dolls. With nobody to share his obsession, he has trouble finding friends—or even holding conversation. But after the school’s most popular girl, Marin Kitagawa, reveals a secret of her own, he discovers a new purpose for his sewing skills. Together, they’ll make her cosplay dreams come true!",
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-Iy6Lze5SOme8.jpg"
        },
        {
            name: "Shingeki no Kyojin: The Final Season Part 2",
            description: "The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control. After taking a huge blow from a surprise attack led by Eren, Marley swiftly acts to return the favor. With Zeke’s true plan revealed and a military forced under new rule, this battle might be fought on two fronts. Does Eren intend on fulfilling his half-brother’s wishes or does he have a plan of his own?",
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131681-ODIRpBIbR5Eu.jpg"
        },
        {
            name: "Sono Bisque Doll wa Koi wo Suru",
            description: "High schooler Wakana Gojou cares about one thing: making Hina dolls. With nobody to share his obsession, he has trouble finding friends—or even holding conversation. But after the school’s most popular girl, Marin Kitagawa, reveals a secret of her own, he discovers a new purpose for his sewing skills. Together, they’ll make her cosplay dreams come true!",
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-Iy6Lze5SOme8.jpg"
        },
        {
            name: "Shingeki no Kyojin: The Final Season Part 2",
            description: "The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control. After taking a huge blow from a surprise attack led by Eren, Marley swiftly acts to return the favor. With Zeke’s true plan revealed and a military forced under new rule, this battle might be fought on two fronts. Does Eren intend on fulfilling his half-brother’s wishes or does he have a plan of his own?",
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131681-ODIRpBIbR5Eu.jpg"
        },
    ])
    return (
        <div className="row">
            {
                anime.map(anime =>(
                    <AnimeCard
                        name={anime.name}
                        description={anime.description}
                        image={anime.image}
                    />
                ))
            }
        </div>
    );
};

export default AllAnime;