import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private resend: Resend;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY não definido no .env');
    }
    this.resend = new Resend(apiKey);
  }

  async sendPasswordResetEmail(email: string, token: string, userName: string) {
    const resetLink = `${process.env.FRONTEND_URL}/redefinir-senha?token=${token}`;

    try {
      const { data, error } = await this.resend.emails.send({
        from: `Sistema Castração <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
        to: email,
        subject: 'Recuperação de Senha - Sistema de Castração',
        html: this.getPasswordResetTemplate(userName, resetLink, token),
      });

      if (error) {
        console.error('Erro ao enviar email:', error);
        throw new Error('Falha ao enviar email de recuperação');
      }

      return data;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw error;
    }
  }

  private getPasswordResetTemplate(userName: string, resetLink: string, token: string): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Recuperação de Senha</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🐾 Sistema de Castração</h1>
                      <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Projeto Mymba - UFRPE</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">Olá, ${userName}!</h2>
                      
                      <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Recebemos uma solicitação para redefinir a senha da sua conta no Sistema de Castração.
                      </p>
                      
                      <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                        Clique no botão abaixo para criar uma nova senha:
                      </p>
                      
                      <!-- Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="${resetLink}" 
                               style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                                      color: #ffffff; 
                                      padding: 16px 40px; 
                                      text-decoration: none; 
                                      border-radius: 6px; 
                                      font-weight: bold; 
                                      font-size: 16px;
                                      display: inline-block;
                                      box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                              Redefinir Senha
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Alternative link -->
                      <p style="color: #999999; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0; padding-top: 20px; border-top: 1px solid #eeeeee;">
                        Ou copie e cole este link no seu navegador:
                      </p>
                      <p style="color: #667eea; font-size: 14px; word-break: break-all; margin: 10px 0 0 0;">
                        ${resetLink}
                      </p>
                      
                      <!-- Token info -->
                      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 30px 0; border-radius: 4px;">
                        <p style="color: #856404; font-size: 14px; margin: 0; line-height: 1.6;">
                          ⚠️ <strong>Importante:</strong> Este link expira em 1 hora por segurança.
                        </p>
                      </div>
                      
                      <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                        Se você não solicitou a redefinição de senha, ignore este email. Sua senha permanecerá inalterada.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #eeeeee;">
                      <p style="color: #999999; font-size: 12px; margin: 0 0 10px 0;">
                        Este é um email automático, por favor não responda.
                      </p>
                      <p style="color: #999999; font-size: 12px; margin: 0;">
                        © ${new Date().getFullYear()} Sistema de Castração - Projeto Mymba - UFRPE
                      </p>
                      <p style="color: #999999; font-size: 12px; margin: 10px 0 0 0;">
                        Desenvolvido por Mymba Softwares
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  }

  async sendPasswordResetSuccessEmail(email: string, userName: string) {
    try {
      const { data, error } = await this.resend.emails.send({
        from: 'Sistema Castração <noreply@seudominio.com>',
        to: email,
        subject: 'Senha Alterada com Sucesso - Sistema de Castração',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                  <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
                          <h1 style="color: #ffffff; margin: 0; font-size: 28px;">✅ Senha Alterada</h1>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 40px 30px;">
                          <h2 style="color: #333333; margin: 0 0 20px 0;">Olá, ${userName}!</h2>
                          <p style="color: #666666; font-size: 16px; line-height: 1.6;">
                            Sua senha foi alterada com sucesso às ${new Date().toLocaleString('pt-BR')}.
                          </p>
                          <div style="background-color: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin: 20px 0; border-radius: 4px;">
                            <p style="color: #155724; font-size: 14px; margin: 0;">
                              🔒 Sua conta está segura. Se você não realizou esta alteração, entre em contato imediatamente.
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
                          <p style="color: #999999; font-size: 12px; margin: 0;">
                            © ${new Date().getFullYear()} Sistema de Castração - Projeto Mymba
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body
          </html>
        `,
      });

      if (error) {
        console.error('Erro ao enviar email de confirmação:', error);
      }

      return data;
    } catch (error) {
      console.error('Erro ao enviar email de confirmação:', error);
      // Não falha se o email de confirmação falhar
    }
  }
}
