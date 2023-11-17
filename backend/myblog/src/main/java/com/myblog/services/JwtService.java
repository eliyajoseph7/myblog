package com.myblog.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.security.Signature;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

@Service
public class JwtService {

    final static String SECRET_KEY = "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\n";
    public String extractUserName(String token) {

        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim (String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Objects> extractClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extractClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid (String token, UserDetails userDetails) {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractTokenExpiration(token).before(new Date());
    }

    private Date extractTokenExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);

        return Keys.hmacShaKeyFor(keyBytes);
    }
}
