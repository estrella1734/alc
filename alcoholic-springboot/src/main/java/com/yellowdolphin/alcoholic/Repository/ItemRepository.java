package com.yellowdolphin.alcoholic.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yellowdolphin.alcoholic.Model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {
    // 這裡可以加入更多的自定義查詢方法
}
