package com.example.reactspringbootworkshop.pokeapi;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class loadPokeApi {

    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://pokeapi.co/api/v2/pokemon/"))
                .header("Content-Type", "application/json")
                .build();
        client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(HttpResponse::body)
                .thenApply(loadPokeApi::parseJson)
                .join();
    }
    
public static String parseJson (String responseBody){
    JSONObject result;
    try {
        result = new JSONObject(responseBody);
        System.out.println(result);
        JSONArray pokemons = result.getJSONArray("results");
        for(int i = 0; i < pokemons.length(); i++){
           JSONObject pokemon = pokemons.getJSONObject(i);
            System.out.println(pokemon);
            String name = pokemon.getString("name");
            System.out.println(name);
        }
    } catch (JSONException e) {
        e.printStackTrace();
    }

        return null;
}

}
