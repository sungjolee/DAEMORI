package ohgwang.demori.api.response;

import lombok.Builder;
import lombok.Data;
import ohgwang.demori.DB.entity.League;
import ohgwang.demori.DB.entity.User;
import ohgwang.demori.common.model.response.BaseResponseBody;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;

@Data
public class UserAdminRes extends BaseResponseBody {

    private List<UserAdmin> userAdmins;

    public static UserAdminRes of(int statusCode, String message, List<User> users){
        UserAdminRes res = new UserAdminRes();

        res.setMessage(message);
        res.setStatusCode(statusCode);

        res.userAdmins = new ArrayList<>();

        for(User user : users){
            UserAdmin userAdmin = UserAdmin.builder()
                    .userPk(user.getId())
                    .userId(user.getUserId())
                    .userName(user.getUsername())
                    .address(user.getWallet() == null ? null : user.getWallet().getAddress())
                    .role(user.getRole())
                    .fileUrl(user.getUniversityAuth() == null ? null : user.getUniversityAuth().getFileUrl())
                    .build();
            res.userAdmins.add(userAdmin);

        }

        return res;
    }

}

@Data
@Builder
class UserAdmin{
    int userPk;
    String userId;
    String userName;
    String address;
    String role;
    String fileUrl;
}