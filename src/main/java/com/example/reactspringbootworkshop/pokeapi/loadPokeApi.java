package com.example.reactspringbootworkshop.pokeapi;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class loadPokeApi {

    public static void main(String[] args) {
        try {
            URL url = new URL("https://pokeapi.co/api/v2/pokemon/");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            //Request setup
            connection.setRequestMethod("GET");
            connection.setConnectTimeout(5000);
            connection.setReadTimeout(5000);
            int statusCode = connection.getResponseCode();
            System.out.println(statusCode);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
