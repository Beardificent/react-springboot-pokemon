package com.example.reactspringbootworkshop.pokemon;

public class PokemonData {

    private int pokemonId;
    private String pokemonName;
    private String pokemonTypeOne;
    private String pokemonTypeTwo;
    private String pokemonDescription;
    private String[] pokemonMoves;

    public int getPokemonId() {
        return pokemonId;
    }

    public void setPokemonId(int pokemonId) {
        this.pokemonId = pokemonId;
    }

    public String getPokemonName() {
        return pokemonName;
    }

    public void setPokemonName(String pokemonName) {
        this.pokemonName = pokemonName;
    }

    public String getPokemonTypeOne() {
        return pokemonTypeOne;
    }

    public void setPokemonTypeOne(String pokemonTypeOne) {
        this.pokemonTypeOne = pokemonTypeOne;
    }

    public String getPokemonTypeTwo() {
        return pokemonTypeTwo;
    }

    public void setPokemonTypeTwo(String pokemonTypeTwo) {
        this.pokemonTypeTwo = pokemonTypeTwo;
    }

    public String getPokemonDescription() {
        return pokemonDescription;
    }

    public void setPokemonDescription(String pokemonDescription) {
        this.pokemonDescription = pokemonDescription;
    }

    public String[] getPokemonMoves() {
        return pokemonMoves;
    }

    public void setPokemonMoves(String[] pokemonMoves) {
        this.pokemonMoves = pokemonMoves;
    }


}