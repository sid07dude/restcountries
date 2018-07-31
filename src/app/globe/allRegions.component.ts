import { Component } from '@angular/core';
import { AllRegions } from './allRegions';

import { ActivatedRoute } from '@angular/router';
import { GlobeService } from '../globe/globe.service';


@Component({
    selector: "app-region",
    templateUrl: 'allRegions.component.html',
    styleUrls: ['allRegions.component.css']
})
export class RegionViewComponent {
    allRegions: AllRegions[];
    constructor(private _globeService: GlobeService, private _activatedRoute: ActivatedRoute) {
        this.allRegions = [
            {
                id: 1,
                name: 'Africa',
                regionInfo1: 'Africa contains countries such as Libya, Niger and Zimbabwe. The weather across most of Africa tends to be hot and dry with little rainfall. Some of the worlds most famous wildlife including lions  and elephants inhabit this zone. These animals have perfectly adapted to handle Africas range of biomes.',
                regionInfo2: 'Biomes are environments classified by weather and the adaptations of the living things that inhabit them. There are five biomes: aquatic, desert, tundra, forest and grasslands. Africa contains three of these: deserts, grasslands and forests. As a result, Africa has a diverse array of plants,animals and weather. Africa is also geographically diverse. The tallest peak is Mount Kilimanjaro with a summit of 19,340 feet, while the famously flat Serengeti Plains stretch on for 12,000 square miles',
                photoPath: '../../assets/images/africa.png'
            },
            {
                id: 2,
                name: 'Americas',
                regionInfo1: 'America consists of Central America North America and South America :',
                regionInfo2: 'Central America contains the smallest number of countries in any of the eight geographic regions.These countries are Belize, El Salvador, Costa Rica, Guatemala, Honduras, Nicaragua and Panama.Central.',
                regionInfo3: 'North America contains countries such as the United States, Canada and Mexico as well as some countries within the ranges of the Caribbean and Central America. North America is one of the most biologically and geographically diverse regions, containing all five of Earth\'s biomes.South America includes countries such as Chile, Peru and Argentina. This region contains only the desert and forest biomes, but more plant and animals species can be found in South America than in any other region. Well-known South American animals include jaguars, sloths and capybaras.',
                photoPath: '../../assets/images/America.png'
                
            },
            {
                id: 3,
                name: 'Asia',
                regionInfo1: 'Asia contains countries such as Iraq, India, Japan and China. Asia is stunningly diverse, containing all five of Earth\'s biomes. The Caspian Sea, the world\'s largest inland lake, is bordered by several countries in this region, including Kazakhstan and Iran. The Gobi Desert, the largest desert in Asia, covers more than 500,000 square miles, while Asias largest grassland, the Central Anatolian steppe in Turkey, stretches on for nearly 10,000 square miles. Asia is home to the  worlds largest forest, the Taiga, as well as several alpine tundras, such as the one that tops the Himalayan mountain range in Tibet. Familiar Asian animals include tigers, pandas and snow leopards.',
                photoPath: '../../assets/images/asia.png'
            },
            {
                id: 4,
                name: 'Europe',
                regionInfo1: 'Europe contains countries such as England and Ireland, as well as the world\'s largest country: Russia.Europe is home to all of Earth\'s biomes except for the desert biome. From the famous Lake Loch Ness in Ireland to the Siberian Tundra in Russia, Europe is geographically diverse. Southern Europe is mountainous, with the highest mountain peak being Mont Blanc in the Alps at a height of 15,778 feet. Flat, grassy plains are common throughout Eastern Europe. Europe contains 24large lakes, the largest of which is Lake Vänern in Sweden. Some of Europes most famous wildlife includes hares, lynxes and hedgehogs.',
                photoPath: '../../assets/images/europe.png'
            },
            {
                id: 5,
                name: 'Oceania',
                regionInfo1: 'Oceania contains countries such as Australia and New Zealand along with many small islands, such as Christmas Island. Four of Earth\'s five biomes can be found in this region, with the exception being tundra. The Australian Outback is one of the most famous desert regions in the world with summer temperatures averaging over 100 degrees Fahrenheit. Meanwhile, some island nations in the Oceania region, such as Papua New Guinea, boast tropical rainforests. Some of the well-known animals in this region include kangaroos, Christmas Island red crabs and kiwis.',
                photoPath: '../../assets/images/Oceania.png'
            }

        ];
    }

}