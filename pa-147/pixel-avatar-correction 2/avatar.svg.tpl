<svg  xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 <?=$size?> <?=$size?>">
    <?php foreach($grid as $rowIndex => $row): ?>
        <?php foreach($row as $colIndex => $color): ?>
            <?php if ($color): ?>
                <rect x="<?=$colIndex;?>" y="<?=$rowIndex;?>" height="1" width="1" fill="<?=$color?>"/>
            <?php endif; ?>
        <?php endforeach; ?>
    <?php endforeach; ?>
</svg>