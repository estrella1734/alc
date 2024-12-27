package com.yellowdolphin.alcoholic.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.yellowdolphin.alcoholic.Model.Item;
import com.yellowdolphin.alcoholic.Repository.ItemRepository;
import java.util.List;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    // 根據 itemNo 獲取圖片路徑
    public String getImagePathByItemNo(String itemNo) {
        // 根據 itemNo 查找 Item 物件，並返回圖片路徑
        Item item = itemRepository.findById(itemNo)
                                  .orElseThrow(() -> new IllegalArgumentException("Item not found"));
        return item.getPic();  // 返回圖片的路徑 (儲存在 'pic' 欄位)
        }
}