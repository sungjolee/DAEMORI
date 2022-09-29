package ohgwang.demori.api.request;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class LeagueRegisterPostReq {

    // League
    private String leagueTitle;
    private LocalDateTime leagueStart;
    private LocalDateTime leagueEnd;
    private LocalDateTime sponStart;
    private String place;
    private String contractAddress;
    private int broadcast;

    // TEAM
    private String team1Name;
    private String team1University;
    private String team1Wallet;
    private String team1Color;

    private String team2Name;
    private String team2University;
    private String team2Wallet;
    private String team2Color;

}
