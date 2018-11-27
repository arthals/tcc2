namespace TCC.Infra.Dados.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TBArquivo",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Caminho = c.String(),
                        Name = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TBContexto",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Trecho = c.String(nullable: false),
                        Significado = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TBTexto",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Palavras = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TBUsuario",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nome = c.String(nullable: false),
                        Senha = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ContextoArquivoes",
                c => new
                    {
                        Contexto_Id = c.Int(nullable: false),
                        Arquivo_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Contexto_Id, t.Arquivo_Id })
                .ForeignKey("dbo.TBContexto", t => t.Contexto_Id, cascadeDelete: true)
                .ForeignKey("dbo.TBArquivo", t => t.Arquivo_Id, cascadeDelete: true)
                .Index(t => t.Contexto_Id)
                .Index(t => t.Arquivo_Id);
            
            CreateTable(
                "dbo.TextoContextoes",
                c => new
                    {
                        Texto_Id = c.Int(nullable: false),
                        Contexto_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Texto_Id, t.Contexto_Id })
                .ForeignKey("dbo.TBTexto", t => t.Texto_Id, cascadeDelete: true)
                .ForeignKey("dbo.TBContexto", t => t.Contexto_Id, cascadeDelete: true)
                .Index(t => t.Texto_Id)
                .Index(t => t.Contexto_Id);
            
            CreateTable(
                "dbo.UsuarioTextoes",
                c => new
                    {
                        Usuario_Id = c.Int(nullable: false),
                        Texto_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Usuario_Id, t.Texto_Id })
                .ForeignKey("dbo.TBUsuario", t => t.Usuario_Id, cascadeDelete: true)
                .ForeignKey("dbo.TBTexto", t => t.Texto_Id, cascadeDelete: true)
                .Index(t => t.Usuario_Id)
                .Index(t => t.Texto_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UsuarioTextoes", "Texto_Id", "dbo.TBTexto");
            DropForeignKey("dbo.UsuarioTextoes", "Usuario_Id", "dbo.TBUsuario");
            DropForeignKey("dbo.TextoContextoes", "Contexto_Id", "dbo.TBContexto");
            DropForeignKey("dbo.TextoContextoes", "Texto_Id", "dbo.TBTexto");
            DropForeignKey("dbo.ContextoArquivoes", "Arquivo_Id", "dbo.TBArquivo");
            DropForeignKey("dbo.ContextoArquivoes", "Contexto_Id", "dbo.TBContexto");
            DropIndex("dbo.UsuarioTextoes", new[] { "Texto_Id" });
            DropIndex("dbo.UsuarioTextoes", new[] { "Usuario_Id" });
            DropIndex("dbo.TextoContextoes", new[] { "Contexto_Id" });
            DropIndex("dbo.TextoContextoes", new[] { "Texto_Id" });
            DropIndex("dbo.ContextoArquivoes", new[] { "Arquivo_Id" });
            DropIndex("dbo.ContextoArquivoes", new[] { "Contexto_Id" });
            DropTable("dbo.UsuarioTextoes");
            DropTable("dbo.TextoContextoes");
            DropTable("dbo.ContextoArquivoes");
            DropTable("dbo.TBUsuario");
            DropTable("dbo.TBTexto");
            DropTable("dbo.TBContexto");
            DropTable("dbo.TBArquivo");
        }
    }
}
