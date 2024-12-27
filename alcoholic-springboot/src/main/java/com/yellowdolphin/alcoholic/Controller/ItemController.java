package com.yellowdolphin.alcoholic.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import com.yellowdolphin.alcoholic.Model.Item;
import com.yellowdolphin.alcoholic.Service.ItemService;

@RestController
@RequestMapping("/api")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/items")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    // 透過 itemNo 獲取圖片
    @GetMapping("/images/{itemNo}")
    public ResponseEntity<byte[]> getImage(@PathVariable String itemNo) throws IOException {
        // 獲取圖片路徑
        String imagePath = itemService.getImagePathByItemNo(itemNo);

        // 假設圖片存在於 'resources/static' 資料夾內
        ClassPathResource resource = new ClassPathResource("pic/" + imagePath);

        byte[] imageBytes = Files.readAllBytes(resource.getFile().toPath());

        // 返回圖片，設置為 inline 顯示
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)  // 這裡可以根據圖片格式修改
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                .body(imageBytes);
    }

}
