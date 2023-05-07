import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { Dispatch, SetStateAction } from "react";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends StackParamList{}
    }
}

export type StackParamList = {
    'MainScreen': undefined,
    'AddAnimal': undefined,
    'OrderFeed': {screenName: string},
    'OrderVet': undefined,
    'Embryotransfer': {selectedSeed: number, selectedFeed: number},
    'Insemination': {selectedSeed: number, selectedFeed: number},
    'BreedingMaterial': undefined,
    'BuySeed': {screenName: string},
    'OrderedFeeds': undefined,
    'OrderedServices': undefined,
    'SellCattle': undefined,
    'EmbryotransferContinue': {selectedFeed: number},
    'OrderConsulting': undefined,
    'InitializeScreen': undefined,
    'BreedingMaterialInfo': {cowSelected: number},
    'ChatWithSeller': {sellerID: number, cowSelected: number},
    'BuyCattle': undefined,
    'InseminationSynchro': undefined,
    'SellCattlePremium': {cowSelected: number},
    'MyAnimals': undefined,
    'OrderVetContinue': {who: string, all: string, chosen: string, serviceSelected: number},
  }

export type RootStackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<StackParamList, Screen>;