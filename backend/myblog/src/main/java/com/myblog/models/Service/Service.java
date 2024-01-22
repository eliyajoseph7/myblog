package com.myblog.models.Service;

import com.myblog.models.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "services")
public class Service extends BaseEntity {
    @Id
    @SequenceGenerator(
            name = "service_sequence",
            sequenceName = "service_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE
    )

    private Long id;
    private @NonNull String title;
    private @NonNull String description;
    private @NonNull String image;
}
