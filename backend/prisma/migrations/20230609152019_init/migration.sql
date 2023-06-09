-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `perfil` ENUM('CLIENTE', 'PROFISSIONAL', 'ADMIN') NOT NULL DEFAULT 'CLIENTE',
    `dthCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dthAtualizacao` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuario_telefone_key`(`telefone`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    INDEX `Usuario_telefone_idx`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Servico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `valorPadrao` DOUBLE NOT NULL,
    `duracaoPadrao` DOUBLE NOT NULL,
    `dthAtualizacao` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Servico_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrestadorServico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profissionalId` INTEGER NOT NULL,
    `servicoId` INTEGER NOT NULL,
    `valor` DOUBLE NOT NULL,
    `dthAtualizacao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agendamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clienteId` INTEGER NOT NULL,
    `profissionalId` INTEGER NOT NULL,
    `servicoId` INTEGER NOT NULL,
    `dthAgendamento` DATETIME(3) NOT NULL,
    `dthAtualizacao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PrestadorServico` ADD CONSTRAINT `PrestadorServico_profissionalId_fkey` FOREIGN KEY (`profissionalId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrestadorServico` ADD CONSTRAINT `PrestadorServico_servicoId_fkey` FOREIGN KEY (`servicoId`) REFERENCES `Servico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_profissionalId_fkey` FOREIGN KEY (`profissionalId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_servicoId_fkey` FOREIGN KEY (`servicoId`) REFERENCES `Servico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
