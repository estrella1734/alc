package com.yellowdolphin.alcoholic.Model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Item {

    @Id
    @Column(name = "item_no", nullable = false, unique = true)
    private String itemNo;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "pic")
    private String pic;  // 圖片的相對路徑

    @Column(name = "category")
    private String category;

    @Column(name = "series")
    private String series;

    @Column(name = "price")
    private short price;

    @Column(name = "sales")
    private short sales;

    @Column(name = "spec1")
    private String spec1;

    @Column(name = "spec2")
    private String spec2;

    @Column(name = "desc")
    private String desc;

    // Getters and Setters
    public String getItemNo() {
        return itemNo;
    }

    public void setItemNo(String itemNo) {
        this.itemNo = itemNo;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public short getPrice() {
        return price;
    }

    public void setPrice(short price) {
        this.price = price;
    }

    public short getSales() {
        return sales;
    }

    public void setSales(short sales) {
        this.sales = sales;
    }

    public String getSpec1() {
        return spec1;
    }

    public void setSpec1(String spec1) {
        this.spec1 = spec1;
    }

    public String getSpec2() {
        return spec2;
    }

    public void setSpec2(String spec2) {
        this.spec2 = spec2;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
