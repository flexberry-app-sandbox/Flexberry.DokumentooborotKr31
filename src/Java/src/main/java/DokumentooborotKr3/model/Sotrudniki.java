package DokumentooborotKr3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import DokumentooborotKr3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISDokumentooborotKr3Сотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDСотрудника")
    private Integer idсотрудника;

    @Column(name = "ФИОСотрудника")
    private String фиосотрудника;

    @Column(name = "ДатаПриема")
    private Date датаприема;

    @Column(name = "Зарплата")
    private Double зарплата;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @Column(name = "Пол")
    private String пол;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otdel")
    @Convert("Otdel")
    @Column(name = "Отдел", length = 16, unique = true, nullable = false)
    private UUID _otdelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otdel", insertable = false, updatable = false)
    private Otdel otdel;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDСотрудника() {
      return idсотрудника;
    }

    public void setIDСотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }

    public String getФИОСотрудника() {
      return фиосотрудника;
    }

    public void setФИОСотрудника(String фиосотрудника) {
      this.фиосотрудника = фиосотрудника;
    }

    public Date getДатаПриема() {
      return датаприема;
    }

    public void setДатаПриема(Date датаприема) {
      this.датаприема = датаприема;
    }

    public Double getЗарплата() {
      return зарплата;
    }

    public void setЗарплата(Double зарплата) {
      this.зарплата = зарплата;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }

    public String getПол() {
      return пол;
    }

    public void setПол(String пол) {
      this.пол = пол;
    }


}