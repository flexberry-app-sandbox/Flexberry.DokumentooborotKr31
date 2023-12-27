package DokumentooborotKr3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import DokumentooborotKr3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ФормаДокумента
 */
@Entity(name = "IISDokumentooborotKr3ФормаДокумента")
@Table(schema = "public", name = "ФормаДокумента")
public class FormaDokumenta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Содержание")
    private String содержание;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Наименование")
    private String наименование;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "AvPolzovateli")
    @Convert("AvPolzovateli")
    @Column(name = "АвПользователи", length = 16, unique = true, nullable = false)
    private UUID _avpolzovateliid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "AvPolzovateli", insertable = false, updatable = false)
    private AvPolzovateli avpolzovateli;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otdel")
    @Convert("Otdel")
    @Column(name = "Отдел", length = 16, unique = true, nullable = false)
    private UUID _otdelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otdel", insertable = false, updatable = false)
    private Otdel otdel;


    public FormaDokumenta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСодержание() {
      return содержание;
    }

    public void setСодержание(String содержание) {
      this.содержание = содержание;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}