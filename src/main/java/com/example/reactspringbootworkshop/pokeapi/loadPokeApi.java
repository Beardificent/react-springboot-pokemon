package com.example.reactspringbootworkshop.pokeapi;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class loadPokeApi {

    public static void main(String[] args) {
        BufferedReader bufferedReader;
        String line;
        StringBuffer responseContent = new StringBuffer();

        try {
            URL url = new URL("https://pokeapi.co/api/v2/pokemon/");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            //Request setup
            connection.setRequestMethod("GET");
            connection.setConnectTimeout(5000);
            connection.setReadTimeout(5000);
            int statusCode = connection.getResponseCode();
            System.out.println(statusCode);

            if (statusCode > 299){
                bufferedReader = new BufferedReader(new InputStreamReader(connection.getErrorStream()));
                while((line = bufferedReader.readLine()) != null){
                    responseContent.append(line);
                }
                bufferedReader.close();
            } else {
                bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                while((line = bufferedReader.readLine()) != null){
                    responseContent.append(line);
                }
                bufferedReader.close();
            }
            System.out.println(responseContent.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
